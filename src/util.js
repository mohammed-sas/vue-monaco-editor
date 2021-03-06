import * as monaco from "monaco-editor";
import { namespace } from "./constants/nameSpace";
import { nonTriggeredSuggestions } from "./constants/suggestions";
export const generateNamespaceSuggestion = (arr) =>
  arr
    .filter((value) => value.type !== "Module")
    .map((value) => ({
      label: value.type,
      kind: monaco.languages.CompletionItemKind.Field,
      insertText: `${value.type}`,
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
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("workorder")),
      ];
      break;
    case `NameSpace("asset")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("asset")),
      ];
      break;
    case `NameSpace("default")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("default")),
      ];
      break;
    case `NameSpace("module")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("module")),
      ];
      break;
    case `NameSpace("readings")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("readings")),
      ];
      break;
    case `NameSpace("notification")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("notification")),
      ];
      break;
    case `NameSpace("math")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("math")),
      ];
      break;
    case `NameSpace("http")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("http")),
      ];
      break;
    case `NameSpace("connectedApp")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("connectedApp")),
      ];
      break;
    case `NameSpace("date")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("date")),
      ];
      break;
    case `NameSpace("number")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("number")),
      ];
      break;
    case `NameSpace("resource")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("resource")),
      ];
      break;
    case `NameSpace("field")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("field")),
      ];
      break;
    case `NameSpace("file")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("file")),
      ];
      break;
    case `NameSpace("xml")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("xml")),
      ];
      break;
    case `NameSpace("control")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("control")),
      ];
      break;
    case `NameSpace("businessHours")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("businessHours")),
      ];
      break;
    case `NameSpace("list")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("list")),
      ];
      break;
    case `NameSpace("map")`:
      suggestions = [
        ...generateFunctionSuggestion(generateFunctionsList("map")),
      ];
      break;

    default:
      if (activeWord.includes("Module")) {
        suggestions = [
          ...generateFunctionSuggestion(generateFunctionsList("Module")),
        ];
      } else {
        suggestions = [...nonTriggeredSuggestions()];
      }
  }

  return suggestions;
};

export const generateFunctionsList = (string) =>
  namespace.filter((value) => value.type === string)[0].functions;

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
