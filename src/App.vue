<template>
  <div id="app">
    <div ref="editor" style="height: 1100px; width: 1100px"></div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";
import {
  readingsSuggestions,
  nonTriggeredSuggestions,
  moduleFunctionSuggestions,
  moduleMetaFunctionSuggestions,
  assetFunctionSuggestions,
} from "./constants";
let editor;
export default {
  name: "App",
  mounted() {
    const el = this.$refs.editor;
    // registering language
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
      triggerCharacters: ["."],
      provideCompletionItems: (model, position) => {
        var suggestions = [];
        var last_chars = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 0,
          endLineNumber: position.lineNumber,
          endColumn: position.column - 1,
        });
        var words = last_chars.replace("\t", "").split(" ");
        let activeWord = words[words.length - 1];
        if (activeWord == "Module(moduleName)") {
          suggestions.push(...moduleFunctionSuggestions());
        } else if (activeWord === `NameSpace('readings')`) {
          suggestions.push(...readingsSuggestions());
        } else if (activeWord === `NameSpace('module')`) {
          suggestions.push(...moduleMetaFunctionSuggestions());
        } else if (activeWord === `NameSpace('asset')`) {
          suggestions.push(...assetFunctionSuggestions());
        }
        if (suggestions.length === 0) {
          return { suggestions: nonTriggeredSuggestions() };
        } else {
          return { suggestions };
        }
      },
    });

    this.editor = monaco.editor.create(el, {
      value: `facilioScript`,
      language: "facilioScript",
    });
  },
  unmounted() {
    editor.dispose();
  },
};
</script>

<style></style>
