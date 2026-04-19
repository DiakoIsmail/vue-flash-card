<template>
  <div v-if="category" class="page">
    <nav class="navbar">
      <RouterLink to="/" class="back">← Alla ämnen</RouterLink>
      <div class="meta">
        <span class="icon">{{ category.icon }}</span>
        <span class="title">{{ category.title }}</span>
      </div>
      <span class="progress">{{ current + 1 }} / {{ category.questions.length }}</span>
    </nav>

    <main class="content">
      <FlashCard :key="current" :question="category.questions[current]" />

      <div class="controls">
        <button :disabled="current === 0" @click="current--">← Föregående</button>
        <div class="dots">
          <button
            v-for="(_, i) in category.questions"
            :key="i"
            class="dot"
            :class="{ active: i === current }"
            @click="current = i"
          />
        </div>
        <button :disabled="current === category.questions.length - 1" @click="current++">
          Nästa →
        </button>
      </div>
    </main>
  </div>

  <div v-else class="not-found">
    <p>Kategorin hittades inte.</p>
    <RouterLink to="/">← Tillbaka</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { categories } from '../data/questions'
import FlashCard from '../components/FlashCard.vue'

const route = useRoute()
const current = ref(0)

const category = computed(() =>
  categories.find((c) => c.id === route.params.id)
)
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #1e293b;
  background: #0a1628;
  position: sticky;
  top: 0;
  z-index: 10;
}

.back {
  color: #60a5fa;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

.back:hover {
  color: #93c5fd;
}

.meta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon {
  font-size: 20px;
}

.title {
  font-size: 15px;
  font-weight: 600;
  color: #e2e8f0;
}

.progress {
  font-size: 13px;
  color: #64748b;
  white-space: nowrap;
}

.content {
  flex: 1;
  max-width: 760px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.controls button {
  background: #1e293b;
  border: 1px solid #334155;
  color: #e2e8f0;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
  white-space: nowrap;
}

.controls button:hover:not(:disabled) {
  background: #334155;
  border-color: #60a5fa;
}

.controls button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.dots {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
  flex: 1;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #334155;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: background 0.15s, transform 0.15s;
}

.dot.active {
  background: #60a5fa;
  transform: scale(1.4);
}

.dot:hover:not(.active) {
  background: #475569;
}

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 80px 24px;
  color: #64748b;
}

.not-found a {
  color: #60a5fa;
  text-decoration: none;
}
</style>
