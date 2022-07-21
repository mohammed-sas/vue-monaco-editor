<template>
  <div id="app">
    <div ref="editor" style="height: 500px; width: 1100px"></div>
  </div>
</template>

<script>
import { setup } from "./setup";
let editor;
let hoverEditor;
export default {
  name: "App",
  mounted() {
    const el = this.$refs.editor;
    setup(el, editor, hoverEditor);
  },
  unmounted() {
    editor.dispose();
    hoverEditor.dispose();
  },
};
</script>

<style></style>
