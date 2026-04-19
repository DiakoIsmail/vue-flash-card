<template>
  <div v-if="lesson && path" class="lesson-view" :class="{ 'focus-mode': a11y.focusMode }">
    <!-- READING PROGRESS BAR -->
    <div class="read-bar" :style="{ width: readPercent + '%', background: path.color }"></div>

    <div class="lesson-layout">
      <!-- SIDEBAR -->
      <aside class="sidebar" :class="{ open: sidebarOpen }">
        <div class="sidebar-header">
          <RouterLink :to="`/path/${path.id}`" class="back-link">← {{ path.title }}</RouterLink>
          <button class="sidebar-close" @click="sidebarOpen = false">✕</button>
        </div>
        <nav class="sidebar-nav">
          <RouterLink
            v-for="(l, idx) in path.lessons"
            :key="l.id"
            :to="`/path/${path.id}/lektion/${l.id}`"
            class="sidebar-item"
            :class="{ active: l.id === lesson.id, done: isComplete(l.id) }"
            @click="sidebarOpen = false"
          >
            <span class="sidebar-num">
              <span v-if="isComplete(l.id)">✓</span>
              <span v-else>{{ idx + 1 }}</span>
            </span>
            <span class="sidebar-label">{{ l.title }}</span>
          </RouterLink>
        </nav>
      </aside>

      <!-- OVERLAY -->
      <div v-if="sidebarOpen" class="sidebar-overlay" @click="sidebarOpen = false"></div>

      <!-- MAIN CONTENT -->
      <main class="lesson-main" ref="mainRef" @scroll="onScroll">
        <!-- LESSON HEADER -->
        <div class="lesson-header">
          <button class="menu-btn" @click="sidebarOpen = true">☰ Lektioner</button>
          <div class="lesson-meta-bar">
            <span class="lesson-emoji-lg">{{ lesson.emoji }}</span>
            <div>
              <div class="lesson-level" :style="{ color: path.color }">{{ levelLabel(lesson.level) }}</div>
              <div class="lesson-time-est">⏱ {{ lesson.estimatedMinutes }} min</div>
            </div>
          </div>
          <h1 class="lesson-title">{{ lesson.title }}</h1>
          <p class="lesson-summary">{{ lesson.summary }}</p>
        </div>

        <!-- SECTIONS -->
        <div class="lesson-sections">
          <template v-for="(section, idx) in lesson.sections" :key="idx">

            <div v-if="section.type === 'text'" class="section-text">
              <h2 v-if="section.heading" class="section-heading">{{ section.heading }}</h2>
              <div class="prose" v-html="renderText(section.content)"></div>
            </div>

            <div v-else-if="section.type === 'code'" class="section-code">
              <h2 v-if="section.heading" class="section-heading">{{ section.heading }}</h2>
              <CodeBlock :code="section.content" :lang="section.language ?? 'java'" />
            </div>

            <div v-else class="section-callout">
              <h2 v-if="section.heading" class="section-heading">{{ section.heading }}</h2>
              <CalloutBox :type="section.type" :heading="section.heading && !section.heading ? section.heading : undefined" :content="section.content" />
            </div>

          </template>
        </div>

        <!-- BOTTOM NAVIGATION -->
        <div class="lesson-footer">
          <button
            class="complete-btn"
            :class="{ done: isComplete(lesson.id) }"
            @click="toggleComplete"
          >
            <span v-if="isComplete(lesson.id)">✓ Avklarad</span>
            <span v-else>Markera som klar</span>
          </button>

          <div class="nav-btns">
            <RouterLink v-if="prevLesson" :to="`/path/${path.id}/lektion/${prevLesson.id}`" class="nav-btn prev">
              ← {{ prevLesson.title }}
            </RouterLink>
            <RouterLink v-if="nextLesson" :to="`/path/${path.id}/lektion/${nextLesson.id}`" class="nav-btn next">
              {{ nextLesson.title }} →
            </RouterLink>
            <RouterLink v-if="!nextLesson" :to="`/path/${path.id}`" class="nav-btn next done-path">
              Klar med kursen! 🎉
            </RouterLink>
          </div>
        </div>
      </main>
    </div>
  </div>

  <div v-else class="not-found">
    <p>Lektionen hittades inte.</p>
    <RouterLink to="/">← Startsida</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { learningPaths } from '../data/tutorials'
import { isComplete, markComplete, markIncomplete } from '../stores/progress'
import { a11y } from '../stores/accessibility'
import CodeBlock from '../components/CodeBlock.vue'
import CalloutBox from '../components/CalloutBox.vue'

const route = useRoute()
const mainRef = ref<HTMLElement | null>(null)
const sidebarOpen = ref(false)
const readPercent = ref(0)

const path = computed(() => learningPaths.find(p => p.id === route.params.pathId))
const lesson = computed(() => path.value?.lessons.find(l => l.id === route.params.lessonId))

const lessonIndex = computed(() => path.value?.lessons.findIndex(l => l.id === lesson.value?.id) ?? -1)
const prevLesson = computed(() => lessonIndex.value > 0 ? path.value!.lessons[lessonIndex.value - 1] : null)
const nextLesson = computed(() => {
  if (!path.value || lessonIndex.value < 0) return null
  return lessonIndex.value < path.value.lessons.length - 1 ? path.value.lessons[lessonIndex.value + 1] : null
})

function levelLabel(level: string) {
  return { beginner: 'Nybörjare', intermediate: 'Mellannivå', advanced: 'Avancerat', expert: 'Expert' }[level] ?? level
}

function toggleComplete() {
  if (!lesson.value) return
  if (isComplete(lesson.value.id)) markIncomplete(lesson.value.id)
  else markComplete(lesson.value.id)
}

function onScroll() {
  const el = mainRef.value
  if (!el) return
  const scrollable = el.scrollHeight - el.clientHeight
  readPercent.value = scrollable > 0 ? Math.round((el.scrollTop / scrollable) * 100) : 100
}

watch(() => route.params.lessonId, () => {
  readPercent.value = 0
  sidebarOpen.value = false
  if (mainRef.value) mainRef.value.scrollTop = 0
})

// ── TEXT RENDERER ──────────────────────────────────────────────────────
function renderText(text: string): string {
  return text
    .split('\n\n')
    .map(block => {
      const lines = block.split('\n')
      if (lines.some(l => l.startsWith('• '))) {
        const items = lines.map(l =>
          l.startsWith('• ') ? `<li>${inlineFmt(l.slice(2))}</li>` : ''
        ).join('')
        return `<ul>${items}</ul>`
      }
      if (lines.some(l => /^\d+\. /.test(l))) {
        const items = lines.map(l => {
          const m = l.match(/^\d+\. (.*)/)
          return m ? `<li>${inlineFmt(m[1])}</li>` : ''
        }).join('')
        return `<ol>${items}</ol>`
      }
      return `<p>${inlineFmt(block.replace(/\n/g, '<br>'))}</p>`
    })
    .join('')
}

function inlineFmt(t: string) {
  return t
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
}
</script>

<style scoped>
.lesson-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* READING BAR */
.read-bar {
  position: fixed;
  top: 60px;
  left: 0;
  height: 3px;
  z-index: 50;
  transition: width 0.1s linear;
  border-radius: 0 2px 2px 0;
}

/* LAYOUT */
.lesson-layout {
  display: flex;
  flex: 1;
  min-height: 0;
}

/* SIDEBAR */
.sidebar {
  width: 260px;
  flex-shrink: 0;
  background: #141e30;
  border-right: 1px solid rgba(255,255,255,0.06);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: sticky;
  top: 60px;
  max-height: calc(100vh - 60px);
}
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.back-link {
  font-size: 0.82rem;
  color: #64748b;
  text-decoration: none;
  transition: color 0.15s;
}
.back-link:hover { color: #94a3b8; }
.sidebar-close { display: none; background: none; border: none; color: #475569; cursor: pointer; font-size: 1rem; }

.sidebar-nav { padding: 0.75rem 0.5rem; display: flex; flex-direction: column; gap: 0.2rem; }
.sidebar-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 0.7rem;
  border-radius: 8px;
  text-decoration: none;
  color: #64748b;
  font-size: 0.83rem;
  transition: background 0.15s, color 0.15s;
}
.sidebar-item:hover { background: rgba(255,255,255,0.04); color: #94a3b8; }
.sidebar-item.active { background: rgba(96,165,250,0.1); color: #e2e8f0; }
.sidebar-item.done { color: #4ade80; }
.sidebar-num {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.72rem;
  font-weight: 700;
  flex-shrink: 0;
}
.sidebar-item.active .sidebar-num { background: rgba(96,165,250,0.2); }
.sidebar-item.done .sidebar-num { background: rgba(74,222,128,0.15); }
.sidebar-label { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* MAIN CONTENT */
.lesson-main {
  flex: 1;
  overflow-y: auto;
  max-height: calc(100vh - 60px);
  scroll-behavior: smooth;
}

.lesson-header {
  padding: 2.5rem 1.5rem 1.5rem;
  max-width: 720px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  margin-bottom: 0;
}
.menu-btn {
  display: none;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: #94a3b8;
  border-radius: 7px;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  cursor: pointer;
  margin-bottom: 1.25rem;
}
.lesson-meta-bar { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; }
.lesson-emoji-lg { font-size: 2rem; }
.lesson-level { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
.lesson-time-est { font-size: 0.78rem; color: #64748b; margin-top: 0.1rem; }
.lesson-title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  margin: 0 0 0.75rem;
  color: #e2e8f0;
  line-height: 1.25;
}
.lesson-summary { font-size: 1rem; color: #94a3b8; margin: 0; line-height: 1.6; }

/* SECTIONS */
.lesson-sections {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.section-heading {
  font-size: 1.15rem;
  font-weight: 700;
  color: #cbd5e1;
  margin: 0 0 0.75rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

/* PROSE – dyslexia-optimised */
.prose :deep(p) {
  margin: 0 0 1em;
  color: #cbd5e1;
  line-height: var(--lh, 1.8);
  max-width: 65ch;
}
.prose :deep(ul), .prose :deep(ol) {
  padding-left: 1.4rem;
  margin: 0 0 1em;
  max-width: 65ch;
}
.prose :deep(li) { margin-bottom: 0.5em; color: #cbd5e1; line-height: var(--lh, 1.8); }
.prose :deep(strong) { font-weight: 700; color: #e2e8f0; }
.prose :deep(code) {
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 0.85em;
  background: rgba(255,255,255,0.07);
  padding: 0.15em 0.4em;
  border-radius: 4px;
  color: #93c5fd;
}

/* LESSON FOOTER */
.lesson-footer {
  max-width: 720px;
  margin: 0 auto;
  padding: 1.5rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.06);
  margin-top: 1rem;
}
.complete-btn {
  align-self: flex-start;
  padding: 0.7rem 1.5rem;
  border-radius: 9px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid #334155;
  background: transparent;
  color: #94a3b8;
  transition: all 0.2s;
}
.complete-btn:hover { border-color: #4ade80; color: #4ade80; }
.complete-btn.done { border-color: #4ade80; color: #4ade80; background: rgba(74,222,128,0.08); }

.nav-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
.nav-btn {
  flex: 1;
  min-width: 150px;
  padding: 0.8rem 1.1rem;
  border-radius: 9px;
  background: #1e293b;
  border: 1px solid rgba(255,255,255,0.07);
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  transition: all 0.15s;
  line-height: 1.4;
}
.nav-btn:hover { background: #263548; color: #e2e8f0; border-color: rgba(255,255,255,0.15); }
.nav-btn.next { text-align: right; }
.nav-btn.prev { text-align: left; }
.nav-btn.done-path { text-align: center; border-color: rgba(74,222,128,0.3); color: #4ade80; }

/* OVERLAY */
.sidebar-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 40;
}

/* FOCUS MODE */
.focus-mode .sidebar { display: none; }

/* NOT FOUND */
.not-found { text-align: center; padding: 4rem; color: #64748b; }
.not-found a { color: #60a5fa; }

/* MOBILE */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: -100%;
    bottom: 0;
    z-index: 50;
    width: 280px;
    max-height: 100vh;
    transition: left 0.25s;
  }
  .sidebar.open { left: 0; }
  .sidebar-overlay { display: block; }
  .sidebar-close { display: block; }
  .menu-btn { display: block; }
  .lesson-main { max-height: none; overflow-y: unset; }
  .lesson-view { overflow: unset; }
  .read-bar { top: 60px; }
}
</style>
