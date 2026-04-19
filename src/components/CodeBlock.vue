<template>
  <div class="code-block">
    <div class="code-header">
      <span class="code-lang">{{ lang }}</span>
      <button class="copy-btn" @click="copy" :class="{ copied }">
        {{ copied ? '✓ Kopierat' : 'Kopiera' }}
      </button>
    </div>
    <pre class="code-pre"><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ code: string; lang?: string }>()
const copied = ref(false)

async function copy() {
  await navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => (copied.value = false), 2000)
}
</script>

<style scoped>
.code-block {
  background: #0d1117;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  overflow: hidden;
  margin: 0.25rem 0;
}
.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: rgba(255,255,255,0.04);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.code-lang {
  font-size: 0.75rem;
  font-weight: 600;
  color: #60a5fa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.copy-btn {
  font-size: 0.75rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: #94a3b8;
  border-radius: 5px;
  padding: 0.2rem 0.6rem;
  cursor: pointer;
  transition: all 0.15s;
}
.copy-btn:hover { background: rgba(255,255,255,0.12); color: #e2e8f0; }
.copy-btn.copied { color: #4ade80; border-color: #4ade80; }

.code-pre {
  margin: 0;
  padding: 1.25rem 1.25rem;
  overflow-x: auto;
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
  font-size: 0.88rem;
  line-height: 1.65;
  color: #e2e8f0;
  tab-size: 4;
}
code { font-family: inherit; }

/* Simple syntax colouring via CSS – no external library needed */
.code-pre :deep(.kw)  { color: #c084fc; } /* keywords */
.code-pre :deep(.st)  { color: #86efac; } /* strings */
.code-pre :deep(.cm)  { color: #6b7280; font-style: italic; } /* comments */
.code-pre :deep(.nb)  { color: #60a5fa; } /* built-in */
</style>
