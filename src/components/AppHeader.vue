<template>
  <header class="app-header" :class="{ 'focus-mode': a11y.focusMode }">
    <div class="header-inner">
      <RouterLink to="/" class="logo">
        <span class="logo-icon">☕</span>
        <span class="logo-text">Java<strong>.learn</strong></span>
      </RouterLink>

      <nav class="main-nav" :class="{ open: menuOpen }">
        <RouterLink to="/" class="nav-link" @click="menuOpen = false">Hem</RouterLink>
        <RouterLink to="/path/grunder" class="nav-link" @click="menuOpen = false">Tutorials</RouterLink>
        <RouterLink to="/intervju" class="nav-link" @click="menuOpen = false">Intervjufrågor</RouterLink>
      </nav>

      <div class="a11y-controls">
        <button class="a11y-btn" title="Minska textstorlek" @click="adjustFont(-1)">A−</button>
        <button class="a11y-btn" title="Öka textstorlek" @click="adjustFont(1)">A+</button>
        <button
          class="a11y-btn"
          :class="{ active: a11y.lineHeight > 1.8 }"
          title="Växla radavstånd"
          @click="cycleLineHeight"
        >≡</button>
        <button
          class="a11y-btn"
          :class="{ active: a11y.dyslexicFont }"
          title="Lästeckensnitt (Lexend)"
          @click="a11y.dyslexicFont = !a11y.dyslexicFont"
        >Aa</button>
        <button
          class="a11y-btn"
          :class="{ active: a11y.focusMode }"
          title="Fokusläge"
          @click="a11y.focusMode = !a11y.focusMode"
        >◎</button>
      </div>

      <button class="hamburger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { a11y } from '../stores/accessibility'

const menuOpen = ref(false)

function adjustFont(delta: number) {
  a11y.fontSize = Math.min(24, Math.max(14, a11y.fontSize + delta))
}

function cycleLineHeight() {
  const steps = [1.6, 1.8, 2.1]
  const idx = steps.indexOf(a11y.lineHeight)
  a11y.lineHeight = steps[(idx + 1) % steps.length]
}
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.07);
  transition: opacity 0.3s;
}
.app-header.focus-mode {
  opacity: 0;
  pointer-events: none;
}
.app-header.focus-mode:hover {
  opacity: 1;
  pointer-events: auto;
}
.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 2rem;
}
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  font-size: 1.15rem;
  color: #e2e8f0;
  white-space: nowrap;
}
.logo-icon { font-size: 1.4rem; }
.logo-text { letter-spacing: -0.01em; }
.logo-text strong { color: #60a5fa; }

.main-nav {
  display: flex;
  gap: 0.25rem;
  flex: 1;
}
.nav-link {
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.15s, background 0.15s;
}
.nav-link:hover { color: #e2e8f0; background: rgba(255,255,255,0.06); }
.nav-link.router-link-active { color: #60a5fa; background: rgba(96,165,250,0.1); }

.a11y-controls {
  display: flex;
  gap: 0.3rem;
  align-items: center;
}
.a11y-btn {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: #94a3b8;
  border-radius: 6px;
  padding: 0.3rem 0.55rem;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  line-height: 1;
}
.a11y-btn:hover { background: rgba(255,255,255,0.12); color: #e2e8f0; }
.a11y-btn.active { background: rgba(96,165,250,0.2); color: #60a5fa; border-color: #60a5fa; }

.hamburger {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #94a3b8;
  border-radius: 2px;
  transition: all 0.2s;
}

@media (max-width: 680px) {
  .main-nav {
    display: none;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background: #0f172a;
    border-bottom: 1px solid rgba(255,255,255,0.07);
    flex-direction: column;
    padding: 1rem;
    gap: 0.25rem;
  }
  .main-nav.open { display: flex; }
  .hamburger { display: flex; margin-left: auto; }
  .a11y-controls { gap: 0.2rem; }
  .a11y-btn { padding: 0.25rem 0.4rem; font-size: 0.75rem; }
}
</style>
