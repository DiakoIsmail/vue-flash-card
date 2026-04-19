<template>
  <div v-if="path" class="path-view">
    <!-- PATH HEADER -->
    <div class="path-hero" :style="{ background: `linear-gradient(135deg, ${path.bgColor} 0%, #0f172a 100%)` }">
      <div class="path-hero-inner">
        <RouterLink to="/" class="back-link">← Tillbaka</RouterLink>
        <div class="path-hero-icon">{{ path.icon }}</div>
        <h1 class="path-hero-title">{{ path.title }}</h1>
        <p class="path-hero-sub">{{ path.subtitle }}</p>
        <div class="path-stats">
          <span :style="{ color: path.color }">{{ levelLabel(path.level) }}</span>
          <span>{{ path.lessons.length }} lektioner</span>
          <span>{{ totalMinutes }} min totalt</span>
          <span v-if="completedCount > 0">{{ completedCount }}/{{ path.lessons.length }} klara</span>
        </div>
        <div class="path-overall-bar" v-if="completedCount > 0">
          <div class="path-overall-fill" :style="{ width: overallProgress + '%', background: path.color }"></div>
        </div>
      </div>
    </div>

    <!-- LESSON LIST -->
    <div class="lesson-list-wrap">
      <div class="lesson-list">
        <RouterLink
          v-for="(lesson, idx) in path.lessons"
          :key="lesson.id"
          :to="`/path/${path.id}/lektion/${lesson.id}`"
          class="lesson-row"
          :class="{ done: isComplete(lesson.id) }"
          :style="{ '--accent': path.color }"
        >
          <div class="lesson-num">
            <span v-if="isComplete(lesson.id)" class="done-check">✓</span>
            <span v-else>{{ idx + 1 }}</span>
          </div>
          <div class="lesson-info">
            <div class="lesson-emoji">{{ lesson.emoji }}</div>
            <div class="lesson-text">
              <h3 class="lesson-title">{{ lesson.title }}</h3>
              <p class="lesson-summary">{{ lesson.summary }}</p>
            </div>
          </div>
          <div class="lesson-meta">
            <span class="lesson-time">{{ lesson.estimatedMinutes }} min</span>
          </div>
          <div class="lesson-arrow">→</div>
        </RouterLink>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <p>Kursen hittades inte.</p>
    <RouterLink to="/">← Tillbaka till startsidan</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { learningPaths } from '../data/tutorials'
import { isComplete } from '../stores/progress'

const route = useRoute()
const path = computed(() => learningPaths.find(p => p.id === route.params.pathId))
const totalMinutes = computed(() => path.value?.lessons.reduce((s, l) => s + l.estimatedMinutes, 0) ?? 0)
const completedCount = computed(() => path.value?.lessons.filter(l => isComplete(l.id)).length ?? 0)
const overallProgress = computed(() => {
  if (!path.value?.lessons.length) return 0
  return Math.round((completedCount.value / path.value.lessons.length) * 100)
})

function levelLabel(level: string) {
  return { beginner: 'Nybörjare', intermediate: 'Mellannivå', advanced: 'Avancerat', expert: 'Expert' }[level] ?? level
}
</script>

<style scoped>
.path-view { min-height: 100vh; }

.path-hero {
  padding: 3rem 1.5rem 2.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.path-hero-inner { max-width: 760px; margin: 0 auto; }
.back-link {
  display: inline-block;
  color: #64748b;
  text-decoration: none;
  font-size: 0.88rem;
  margin-bottom: 1.5rem;
  transition: color 0.15s;
}
.back-link:hover { color: #94a3b8; }
.path-hero-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
.path-hero-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  margin: 0 0 0.75rem;
  color: #e2e8f0;
}
.path-hero-sub { font-size: 1rem; color: #94a3b8; margin: 0 0 1.25rem; line-height: 1.6; }
.path-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.88rem;
  color: #64748b;
  margin-bottom: 1rem;
}
.path-overall-bar {
  height: 4px;
  background: rgba(255,255,255,0.06);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 0.5rem;
}
.path-overall-fill { height: 100%; border-radius: 4px; transition: width 0.4s; }

.lesson-list-wrap { max-width: 760px; margin: 0 auto; padding: 2.5rem 1.5rem; }
.lesson-list { display: flex; flex-direction: column; gap: 0.75rem; }

.lesson-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #1e293b;
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
  padding: 1.1rem 1.25rem;
  text-decoration: none;
  color: #e2e8f0;
  transition: border-color 0.15s, transform 0.15s, box-shadow 0.15s;
}
.lesson-row:hover {
  border-color: var(--accent);
  transform: translateX(4px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}
.lesson-row.done { border-color: rgba(74,222,128,0.25); background: rgba(74,222,128,0.04); }

.lesson-num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.82rem;
  font-weight: 700;
  color: #64748b;
  flex-shrink: 0;
}
.done .lesson-num { background: rgba(74,222,128,0.15); color: #4ade80; }
.done-check { font-size: 0.9rem; }

.lesson-info { display: flex; align-items: center; gap: 0.75rem; flex: 1; min-width: 0; }
.lesson-emoji { font-size: 1.3rem; flex-shrink: 0; }
.lesson-text { min-width: 0; }
.lesson-title { font-size: 1rem; font-weight: 600; margin: 0 0 0.2rem; }
.lesson-summary { font-size: 0.82rem; color: #64748b; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.lesson-meta { flex-shrink: 0; }
.lesson-time { font-size: 0.78rem; color: #475569; background: rgba(255,255,255,0.04); padding: 0.2rem 0.5rem; border-radius: 5px; }

.lesson-arrow { font-size: 1rem; color: #334155; transition: color 0.15s; }
.lesson-row:hover .lesson-arrow { color: var(--accent); }

.not-found { text-align: center; padding: 4rem; color: #64748b; }
.not-found a { color: #60a5fa; }

@media (max-width: 500px) {
  .lesson-summary { display: none; }
}
</style>
