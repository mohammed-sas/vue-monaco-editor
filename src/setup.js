import * as monaco from "monaco-editor";
import { populateSuggestions, populateHoverSuggestion } from "./util";
export const setup = (el, editor, hoverEditor) => {
  monaco.languages.register({ id: "facilioScript" });
  monaco.languages.setMonarchTokensProvider("facilioScript", {
    tokenizer: {
      root: [[/[{}]/, "delimiter.bracket"], { include: "common" }],
      common: [
        // identifiers and keywords
        [
          /[a-z_$][\w$]*/,
          {
            cases: {
              "@keywords": "keyword",
              "@default": "identifier",
            },
          },
        ],
        [/[A-Z][\w\$]*/, "type.identifier"], // to show class names nicely
        // [/[A-Z][\w\$]*/, 'identifier'],

        // whitespace
        { include: "@whitespace" },

        // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)

        // delimiters and operators
        [/[()\[\]]/, "@brackets"],
        [/!(?=([^=]|$))/, "delimiter"],

        // numbers

        [/(@digits)n?/, "number"],

        // delimiter: after number because of .\d floats
        [/[;,.]/, "delimiter"],

        // strings
        [/"([^"\\]|\\.)*$/, "string.invalid"], // non-teminated string
        [/'([^'\\]|\\.)*$/, "string.invalid"], // non-teminated string
        [/"/, "string", "@string_double"],
        [/'/, "string", "@string_single"],
        [/`/, "string", "@string_backtick"],
      ],

      whitespace: [
        [/[ \t\r\n]+/, ""],

        [/\/\*/, "comment", "@comment"],
        [/\/\/.*$/, "comment"],
      ],

      comment: [
        [/[^\/*]+/, "comment"],
        [/\*\//, "comment", "@pop"],
        [/[\/*]/, "comment"],
      ],

      string_double: [
        [/[^\\"]+/, "string"],
        [/@escapes/, "string.escape"],
        [/\\./, "string.escape.invalid"],
        [/"/, "string", "@pop"],
      ],

      string_single: [
        [/[^\\']+/, "string"],
        [/@escapes/, "string.escape"],
        [/\\./, "string.escape.invalid"],
        [/'/, "string", "@pop"],
      ],

      string_backtick: [
        [/\$\{/, { token: "delimiter.bracket", next: "@bracketCounting" }],
        [/[^\\`$]+/, "string"],
        [/@escapes/, "string.escape"],
        [/\\./, "string.escape.invalid"],
        [/`/, "string", "@pop"],
      ],

      bracketCounting: [
        [/\{/, "delimiter.bracket", "@bracketCounting"],
        [/\}/, "delimiter.bracket", "@pop"],
        { include: "common" },
      ],
    },
    defaultToken: "invalid",
    keywords: ["new", "NameSpace", "for", "in"],
    operators: [
      "<=",
      ">=",
      "==",
      "!=",
      "=>",
      "+",
      "-",
      "*",
      "/",
      "%",
      "++",
      "--",
      "!",
      "~",
      "&&",
      "||",
      "??",
      "?",
      ":",
      "=",
      "+=",
      "-=",
      "*=",
      "/=",
      "%=",
    ],

    escapes:
      /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
  });

  monaco.languages.setLanguageConfiguration("facilioScript", {
    wordPattern:
      /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
      lineComment: "//",
      blockComment: ["/*", "*/"],
    },
    brackets: [
      ["{", "}"],
      ["[", "]"],
      ["(", ")"],
    ],

    onEnterRules: [
      {
        // e.g. /** | */
        beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
        afterText: /^\s*\*\/$/,
        action: {
          indentAction: monaco.languages.IndentAction.IndentOutdent,
          appendText: " * ",
        },
      },
      {
        // e.g. /** ...|
        beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
        action: {
          indentAction: monaco.languages.IndentAction.None,
          appendText: " * ",
        },
      },
      {
        // e.g.  * ...|
        beforeText: /^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,
        action: {
          indentAction: monaco.languages.IndentAction.None,
          appendText: "* ",
        },
      },
      {
        // e.g.  */|
        beforeText: /^(\t|(\ \ ))*\ \*\/\s*$/,
        action: {
          indentAction: monaco.languages.IndentAction.None,
          removeText: 1,
        },
      },
    ],
    autoClosingPairs: [
      { open: "{", close: "}" },
      { open: "[", close: "]" },
      { open: "(", close: ")" },
      { open: '"', close: '"', notIn: ["string"] },
      { open: "'", close: "'", notIn: ["string", "comment"] },
      { open: "`", close: "`", notIn: ["string", "comment"] },
      { open: "/**", close: " */", notIn: ["string"] },
    ],
  });

  editor = monaco.languages.registerCompletionItemProvider("facilioScript", {
    triggerCharacters: [".", '"'],
    provideCompletionItems: (model, position) => {
      let suggestions = [];
      let last_chars = model.getValueInRange({
        startLineNumber: position.lineNumber,
        startColumn: 0,
        endLineNumber: position.lineNumber,
        endColumn: position.column - 1,
      });
      let words = last_chars.replace("\t", "").split(" ");
      let activeWord = words[words.length - 1];
      if (activeWord[activeWord.length - 1] === "(") {
        activeWord = activeWord.substring(0, activeWord.length - 1);
      } else if (activeWord === "NameSpace") {
        return;
      }
      suggestions = populateSuggestions(activeWord);
      return { suggestions };
    },
  });
  hoverEditor = monaco.languages.registerHoverProvider("facilioScript", {
    provideHover: (model, position) => {
      let currWord = model.getWordAtPosition(position)?.word;
      let startColumnNum = model.getWordAtPosition(position)?.startColumn;
      let char = model.getValueInRange({
        startLineNumber: position.lineNumber,
        startColumn: startColumnNum - 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      });

      if (char.charAt(0) !== "." || currWord == undefined) {
        return;
      }
      let last_chars = model.getValueInRange({
        startLineNumber: position.lineNumber,
        startColumn: 0,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      });
      let suggestions;
      let wordArr = last_chars.split(".");
      let word =
        wordArr[wordArr.length - 2].split(";")[1] !== undefined
          ? wordArr[wordArr.length - 2].split(";")[1]
          : wordArr[wordArr.length - 2];
      let mainProp = word;
      let mainPropArr = mainProp.split("(");
      if (mainPropArr[0].includes("Module")) {
        suggestions = populateHoverSuggestion("Module", currWord);
      } else {
        let si = mainProp.indexOf("(");
        let ei = mainProp.indexOf(")");
        let mainPropType = mainProp.substring(si + 2, ei - 1);
        suggestions = populateHoverSuggestion(mainPropType, currWord);
      }

      return {
        contents: suggestions,
      };
    },
  });

  editor = monaco.editor.create(el, {
    language: "facilioScript",
  });
};
