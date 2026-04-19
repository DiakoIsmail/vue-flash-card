<template>
  <div class="callout" :class="type">
    <div class="callout-icon">{{ iconFor(type) }}</div>
    <div class="callout-body">
      <p v-if="heading" class="callout-heading">{{ heading }}</p>
      <div class="callout-text" v-html="rendered"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { SectionType } from '../types'

const props = defineProps<{
  type: SectionType
  heading?: string
  content: string
}>()

function iconFor(t: SectionType) {
  return { tip: '💡', warning: '⚠️', info: 'ℹ️', text: '', code: '' }[t] ?? '💡'
}

function renderText(text: string): string {
  return text
    .split('\n\n')
    .map(block => {
      const lines = block.split('\n')
      if (lines.some(l => l.startsWith('• '))) {
        const items = lines.map(l =>
          l.startsWith('• ') ? `<li>${inline(l.slice(2))}</li>` : `<p>${inline(l)}</p>`
        ).join('')
        return `<ul>${items}</ul>`
      }
      return `<p>${inline(block.replace(/\n/g, '<br>'))}</p>`
    })
    .join('')
}

function inline(t: string) {
  return t
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
}

const rendered = computed(() => renderText(props.content))
</script>

<style scoped>
.callout {
  display: flex;
  gap: 0.9rem;
  padding: 1rem 1.1rem;
  border-radius: 10px;
  border-left: 3px solid;
}
.callout.tip     { background: rgba(251,191,36,0.08); border-color: #fbbf24; }
.callout.warning { background: rgba(248,113,113,0.08); border-color: #f87171; }
.callout.info    { background: rgba(96,165,250,0.08);  border-color: #60a5fa; }

.callout-icon { font-size: 1.1rem; margin-top: 0.1rem; flex-shrink: 0; }
.callout-body { flex: 1; min-width: 0; }
.callout-heading {
  font-weight: 700;
  margin: 0 0 0.35rem;
  font-size: 0.9rem;
}
.tip .callout-heading     { color: #fbbf24; }
.warning .callout-heading { color: #f87171; }
.info .callout-heading    { color: #60a5fa; }

.callout-text :deep(p)      { margin: 0 0 0.5rem; font-size: 0.93rem; line-height: 1.65; }
.callout-text :deep(p:last-child) { margin-bottom: 0; }
.callout-text :deep(ul)     { margin: 0.25rem 0 0; padding-left: 1.2rem; }
.callout-text :deep(li)     { margin-bottom: 0.25rem; font-size: 0.93rem; }
.callout-text :deep(strong) { font-weight: 700; }
.callout-text :deep(code)   {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.82em;
  background: rgba(255,255,255,0.08);
  padding: 0.1em 0.35em;
  border-radius: 4px;
}
</style>
