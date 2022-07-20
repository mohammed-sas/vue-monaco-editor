import * as monaco from "monaco-editor";
import { namespace } from "./constants/nameSpace";
import { nonTriggeredSuggestions } from "./constants/suggestions";
export const generateNamespaceSuggestion = (arr) =>
  arr.map((value) => ({
    label: value.type,
    kind: monaco.languages.CompletionItemKind.Field,
    insertText: `"${value.type}"`,
  }));

const generateSnippet = (functionName, parameters) => {
  let paramString = "";
  parameters.forEach((param, index) => {
    let processedParam = `${index + 1}:${param}`;
    paramString += "${" + processedParam + "}";
    index < parameters.length - 1 ? (paramString += ",") : paramString;
  });
  return `${functionName}(${paramString});`;
};
export const generateFunctionSuggestion = (arr) =>
  arr.map((value) => ({
    label: value.name,
    kind: monaco.languages.CompletionItemKind.Function,
    insertText: generateSnippet(value.name, value.parameters),
    insertTextRules:
      monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
  }));

export const populateSuggestions = (activeWord) => {
  let suggestions;
  switch (activeWord) {
    case "NameSpace":
      suggestions = [...generateNamespaceSuggestion(namespace)];
      break;
    case `NameSpace("workorder")`:
      let woFunctions = namespace.filter((val) => val.type === "workorder")[0]
        .functions;
      suggestions = [...generateFunctionSuggestion(woFunctions)];
      break;
    case `NameSpace("asset")`:
      let assetFunctions = namespace.filter((val) => val.type === "asset")[0]
        .functions;
      suggestions = [...generateFunctionSuggestion(assetFunctions)];
      break;
    case `NameSpace("default")`:
      let defaultFunctions = namespace.filter(
        (val) => val.type === "default"
      )[0].functions;
      suggestions = [...generateFunctionSuggestion(defaultFunctions)];
      break;
    case `NameSpace("module")`:
      let moduleFunctions = namespace.filter((val) => val.type === "module")[0]
        .functions;
      suggestions = [...generateFunctionSuggestion(moduleFunctions)];
      break;
    case `NameSpace("readings")`:
      let readingsFunctions = namespace.filter(
        (val) => val.type === "readings"
      )[0].functions;
      suggestions = [...generateFunctionSuggestion(readingsFunctions)];
      break;
    default:
      suggestions = [...nonTriggeredSuggestions()];
  }

  return suggestions;
};

export const populateHoverSuggestion = (type, word) => {
  let content = namespace
    .filter((value) => value.type === type)[0]
    .functions.filter((func) => func.name === word)[0].hoverContent;
  let arr = [];

  for (const value in content) {
    arr.push({
      value: content[value],
    });
  }

  return arr;
};
