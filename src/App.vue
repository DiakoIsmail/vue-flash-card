<template>
  <AppHeader />
  <RouterView />
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import AppHeader from './components/AppHeader.vue'
import { a11y } from './stores/accessibility'

watchEffect(() => {
  const root = document.documentElement
  root.style.setProperty('--font-size', a11y.fontSize + 'px')
  root.style.setProperty('--lh', String(a11y.lineHeight))
  root.style.setProperty(
    '--font-body',
    a11y.dyslexicFont ? "'Lexend', sans-serif" : "'Inter', sans-serif"
  )
})
</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --font-size: 17px;
  --lh: 1.8;
  --font-body: 'Inter', sans-serif;
}

html {
  font-size: var(--font-size);
}

body {
  font-family: var(--font-body);
  background: #0f172a;
  color: #e2e8f0;
  min-height: 100vh;
  line-height: var(--lh);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* Dyslexia-friendly defaults */
p, li, td {
  max-width: 70ch;
  word-spacing: 0.05em;
}

/* Remove italic – harder to read for dyslexia */
em { font-style: normal; font-weight: 600; }

/* Smooth focus rings */
:focus-visible {
  outline: 2px solid #60a5fa;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Scrollbar */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #475569; }
</style>
