<template>
  <div class="home">
    <!-- HERO -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-badge">☕ Lär dig Java</div>
        <h1 class="hero-title">Från nybörjare<br>till expert</h1>
        <p class="hero-sub">
          Tydliga lektioner. Riktiga kodexempel. Designad för alla hjärnor.
        </p>
        <RouterLink to="/path/grunder" class="hero-cta">Börja lära dig →</RouterLink>
      </div>
    </section>

    <!-- LEARNING PATHS -->
    <section class="section">
      <h2 class="section-title">Välj din väg</h2>
      <p class="section-sub">Fyra strukturerade lärstigar – börja var du vill.</p>

      <div class="path-grid">
        <RouterLink
          v-for="path in learningPaths"
          :key="path.id"
          :to="`/path/${path.id}`"
          class="path-card"
          :style="{ '--accent': path.color, '--bg': path.bgColor }"
        >
          <div class="path-icon">{{ path.icon }}</div>
          <div class="path-body">
            <div class="path-level" :style="{ color: path.color }">{{ levelLabel(path.level) }}</div>
            <h3 class="path-title">{{ path.title }}</h3>
            <p class="path-sub">{{ path.subtitle }}</p>
            <div class="path-meta">
              <span>{{ path.lessons.length }} lektioner</span>
              <span>{{ totalMinutes(path) }} min</span>
              <span v-if="pathProgress(path) > 0" class="path-progress-text">
                {{ pathProgress(path) }}% klart
              </span>
            </div>
          </div>
          <div class="path-arrow">→</div>
          <div v-if="pathProgress(path) > 0" class="path-progress-bar">
            <div class="path-progress-fill" :style="{ width: pathProgress(path) + '%', background: path.color }"></div>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- INTERVIEW PREP -->
    <section class="section alt-bg">
      <h2 class="section-title">🎯 Intervjuförberedelse</h2>
      <p class="section-sub">
        Öva på {{ totalQuestions }} frågor fördelade på {{ categories.length }} kategorier – med flashkort.
      </p>
      <div class="cat-grid">
        <RouterLink
          v-for="cat in categories"
          :key="cat.id"
          :to="`/category/${cat.id}`"
          class="cat-card"
          :style="{ '--accent': cat.color }"
        >
          <span class="cat-icon">{{ cat.icon }}</span>
          <div class="cat-body">
            <span class="cat-title">{{ cat.title }}</span>
            <span class="cat-count">{{ cat.questions.length }} frågor</span>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- A11Y HINT -->
    <section class="a11y-hint">
      <div class="a11y-hint-inner">
        <span class="a11y-hint-icon">♿</span>
        <div>
          <strong>Anpassa din läsupplevelse</strong>
          <p>Justera textstorlek, radavstånd och teckensnitt med knapparna uppe i hörnet.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { learningPaths } from '../data/tutorials'
import { categories } from '../data/questions'
import { progress } from '../stores/progress'
import type { LearningPath } from '../types'

const totalQuestions = computed(() => categories.reduce((s, c) => s + c.questions.length, 0))

function levelLabel(level: string) {
  return { beginner: 'Nybörjare', intermediate: 'Mellannivå', advanced: 'Avancerat', expert: 'Expert' }[level] ?? level
}

function totalMinutes(path: LearningPath) {
  return path.lessons.reduce((s, l) => s + l.estimatedMinutes, 0)
}

function pathProgress(path: LearningPath) {
  if (!path.lessons.length) return 0
  const done = path.lessons.filter(l => progress[l.id]).length
  return Math.round((done / path.lessons.length) * 100)
}
</script>

<style scoped>
.home { min-height: 100vh; }

/* HERO */
.hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  padding: 5rem 1.5rem 4rem;
  text-align: center;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.hero-inner { max-width: 680px; margin: 0 auto; }
.hero-badge {
  display: inline-block;
  padding: 0.35rem 1rem;
  border-radius: 999px;
  background: rgba(96,165,250,0.12);
  border: 1px solid rgba(96,165,250,0.25);
  color: #60a5fa;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 0.02em;
}
.hero-title {
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 1.25rem;
  background: linear-gradient(135deg, #e2e8f0 0%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-sub {
  font-size: 1.1rem;
  color: #94a3b8;
  line-height: 1.7;
  margin: 0 0 2rem;
}
.hero-cta {
  display: inline-block;
  padding: 0.85rem 2.2rem;
  background: #3b82f6;
  color: #fff;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.15s, transform 0.15s;
}
.hero-cta:hover { background: #2563eb; transform: translateY(-2px); }

/* SECTIONS */
.section { max-width: 1100px; margin: 0 auto; padding: 3.5rem 1.5rem; }
.alt-bg {
  max-width: 100%;
  background: rgba(255,255,255,0.015);
  border-top: 1px solid rgba(255,255,255,0.05);
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.alt-bg > * { max-width: 1100px; margin-left: auto; margin-right: auto; }
.section-title { font-size: 1.6rem; font-weight: 700; margin: 0 0 0.5rem; color: #e2e8f0; }
.section-sub { color: #94a3b8; margin: 0 0 2.5rem; font-size: 1rem; }

/* PATH CARDS */
.path-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}
.path-card {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #1e293b;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px;
  padding: 1.5rem;
  text-decoration: none;
  color: #e2e8f0;
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.path-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
  box-shadow: 0 8px 24px rgba(0,0,0,0.3);
}
.path-icon { font-size: 2rem; flex-shrink: 0; margin-top: 0.1rem; }
.path-body { flex: 1; min-width: 0; }
.path-level { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.3rem; }
.path-title { font-size: 1.15rem; font-weight: 700; margin: 0 0 0.4rem; }
.path-sub { font-size: 0.85rem; color: #94a3b8; line-height: 1.5; margin: 0 0 0.75rem; }
.path-meta { display: flex; flex-wrap: wrap; gap: 0.6rem; font-size: 0.78rem; color: #64748b; }
.path-progress-text { color: var(--accent); font-weight: 600; }
.path-arrow { font-size: 1.2rem; color: #475569; align-self: center; transition: color 0.2s; }
.path-card:hover .path-arrow { color: var(--accent); }
.path-progress-bar {
  position: absolute; bottom: 0; left: 0; right: 0;
  height: 3px; background: rgba(255,255,255,0.06);
}
.path-progress-fill { height: 100%; border-radius: 0 0 14px 14px; transition: width 0.3s; }

/* CATEGORY CARDS */
.cat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.9rem;
  padding: 0 0 0.5rem;
}
.cat-card {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  background: #1e293b;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px;
  padding: 0.9rem 1rem;
  text-decoration: none;
  color: #e2e8f0;
  transition: transform 0.15s, border-color 0.15s;
}
.cat-card:hover { transform: translateY(-2px); border-color: var(--accent); }
.cat-icon { font-size: 1.4rem; flex-shrink: 0; }
.cat-body { display: flex; flex-direction: column; min-width: 0; }
.cat-title { font-size: 0.88rem; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.cat-count { font-size: 0.75rem; color: #64748b; margin-top: 0.1rem; }

/* A11Y HINT */
.a11y-hint {
  background: rgba(96,165,250,0.04);
  border-top: 1px solid rgba(96,165,250,0.1);
  padding: 1.5rem;
}
.a11y-hint-inner {
  max-width: 700px; margin: 0 auto;
  display: flex; align-items: flex-start; gap: 1rem;
}
.a11y-hint-icon { font-size: 1.4rem; }
.a11y-hint-inner strong { display: block; margin-bottom: 0.3rem; color: #60a5fa; }
.a11y-hint-inner p { margin: 0; font-size: 0.9rem; color: #94a3b8; }
</style>
