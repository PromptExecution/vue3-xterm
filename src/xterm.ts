<template>
  <div ref="terminal" class="terminal"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

export default defineComponent({
  name: 'XtermComponent',
  setup() {
    const terminalElement = ref<HTMLElement | null>(null);
    let terminal: Terminal | null = null;

    onMounted(() => {
      terminal = new Terminal();
      if (terminalElement.value) {
        terminal.open(terminalElement.value);
        // Configure your terminal here
      }
    });

    onUnmounted(() => {
      if (terminal) {
        terminal.dispose();
      }
    });

    return { terminalElement };
  }
});
</script>

<style scoped>
.terminal {
  width: 100%;
  height: 400px;
  background-color: black;
}
</style>

