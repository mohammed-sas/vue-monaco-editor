<template>
  <div id="app">
    <div ref="editor" style="height: 1100px; width: 1100px"></div>
  </div>
</template>

<script>
import * as monaco from "monaco-editor";
import {readingsSuggestions,nonTriggeredSuggestions,moduleFunctionSuggestions,moduleMetaFunctionSuggestions,assetFunctionSuggestions} from './constants';
let editor;
export default {
  name: "App",
  mounted() {
    const el = this.$refs.editor;
    // registering language
    monaco.languages.register({ id: "facilioScript" });
    monaco.languages.setMonarchTokensProvider("facilioScript", {
      tokenizer: {
        root: [
          [/\[error.*/, "custom-error"],
          [/\[notice.*/, "custom-notice"],
          [/\[info.*/, "custom-info"],
          [/\[[a-zA-Z 0-9:]+\]/, "custom-date"],
        ],
      },
    });
 
 
    editor =monaco.languages.registerCompletionItemProvider("facilioScript", {
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
        }else if (activeWord === `NameSpace('module')`) {
          suggestions.push(...moduleMetaFunctionSuggestions());
        }else if (activeWord === `NameSpace('asset')`) {
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
  unmounted(){
    editor.dispose();
  }
};
</script>

<style></style>
