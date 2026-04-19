<template>
  <div class="home">
    <header class="hero">
      <h1>Java Intervjufrågor</h1>
      <p>{{ totalQuestions }} frågor fördelade på {{ categories.length }} ämnen</p>
    </header>

    <main class="grid">
      <RouterLink
        v-for="cat in categories"
        :key="cat.id"
        :to="`/category/${cat.id}`"
        class="cat-card"
        :style="{ '--accent': cat.color }"
      >
        <span class="icon">{{ cat.icon }}</span>
        <h2>{{ cat.title }}</h2>
        <span class="count">{{ cat.questions.length }} frågor</span>
        <div class="bar" />
      </RouterLink>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { categories } from '../data/questions'

const totalQuestions = computed(() =>
  categories.reduce((sum, c) => sum + c.questions.length, 0)
)
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
}

.hero {
  text-align: center;
  margin-bottom: 48px;
}

.hero h1 {
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 700;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.hero p {
  color: #64748b;
  font-size: 16px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}

.cat-card {
  position: relative;
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 16px;
  padding: 28px 24px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.cat-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.icon {
  font-size: 32px;
  line-height: 1;
}

.cat-card h2 {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
  color: #e2e8f0;
}

.count {
  font-size: 12px;
  color: #64748b;
  margin-top: auto;
}

.bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent);
  opacity: 0.7;
}
</style>
