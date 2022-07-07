import * as monaco from 'monaco-editor';

export const moduleFunctionSuggestions = () => [
    {
      label: "fetch",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "fetch(${1:criteria})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "update",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "update(${1:criteria},${2:updateRecord})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "add",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "add(${1:list})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "delete",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "delete(${1:criteria})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "addTemplateData",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "addTemplateData(${1:formId},${2:record})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "export",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "export(${1:viewName},${2:criteria})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "exportAsFileId",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "exportAsFileId(${1:viewName},${2:criteria})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "asMap",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "asMap()",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "getViewCriteria",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "getViewCriteria(${1:viewName})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "getId",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "getId()",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "getAllStates",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "getAllStates()",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "addNote",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "addNote(${1:recordId},${2:note})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "addAttachments",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "addAttachments(${1:recordId},${2:fileId})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
  ];

  export const moduleMetaFunctionSuggestions=()=>[
    {
      label: "getModule",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "getModule(${1:moduleName})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "getField",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "getModule(${1:fieldName},${2:moduleName})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "getEnumFieldValue",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "getEnumFieldValue(${1:picklist},${2:moduleName},${3:Index})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
  ]

  export const assetFunctionSuggestions=()=>[
    {
      label: "getAssetsFromSpaceId",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "getAssetsFromSpaceId(${1:spaceId})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
    {
      label: "getAssetCategoryFields",
      kind: monaco.languages.CompletionItemKind.Function,
      insertText: "getAssetCategoryFields(${1:assetCategoryId})",
      insertTextRules:
        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
    },
  ]