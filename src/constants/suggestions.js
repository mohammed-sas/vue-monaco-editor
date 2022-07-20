import * as monaco from "monaco-editor";

export const readingsSuggestions = () => [
  {
    label: "getAllReadingFieldsForAssetCategory",
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: "getAllReadingFieldsForAssetCategory(${1:assetCategory})",
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
  },
  {
    label: "getAllReadingFieldsForSpaceCategory",
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: "getAllReadingFieldsForSpaceCategory(${1:spaceCategory})",
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
  },
];
export const nonTriggeredSuggestions = () => [
  {
    label: "simpleText",
    kind: monaco.languages.CompletionItemKind.Text,
    insertText: "simpleText",
  },
  {
    label: "testing",
    kind: monaco.languages.CompletionItemKind.Keyword,
    insertText: "testing(${1:condition})",
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
  },
  {
    label: "ifelse",
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: ["if (${1:condition}) {", "\t$0", "} else {", "\t", "}"].join(
      "\n"
    ),
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "If-Else Statement",
  },
  {
    label: "for",
    kind: monaco.languages.CompletionItemKind.Snippet,
    insertText: [
      "for each ${1:index},${2:value} in list {",
      "\t$0",
      "} else {",
      "\t",
      "}",
    ].join("\n"),
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    documentation: "for loop",
  },
  {
    label: "new",
    kind: monaco.languages.CompletionItemKind.Keyword,
    insertText: "new",
  },
  {
    label: "NameSpace",
    kind: monaco.languages.CompletionItemKind.Keyword,
    insertText: "new NameSpace",
  },
  {
    label: "Module",
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: "Module(${1:moduleName})",
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
  },
  // {
  //   label: "namespace workorder",
  //   kind: monaco.languages.CompletionItemKind.Keyword,
  //   insertText: `new NameSpace('workorder')`,
  // },
  // {
  //   label: "namespace site",
  //   kind: monaco.languages.CompletionItemKind.Keyword,
  //   insertText: `new NameSpace('site')`,
  // },
  // {
  //   label: "namespace readings",
  //   kind: monaco.languages.CompletionItemKind.Keyword,
  //   insertText: `new NameSpace('readings')`,
  // },
  // {
  //   label: "namespace module",
  //   kind: monaco.languages.CompletionItemKind.Keyword,
  //   insertText: `new NameSpace('module')`,
  // },
  // {
  //   label: "namespace asset",
  //   kind: monaco.languages.CompletionItemKind.Keyword,
  //   insertText: `new NameSpace('asset')`,
  // },
];
