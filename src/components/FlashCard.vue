<template>
  <div class="card-wrapper" @click="flipped = !flipped">
    <div class="card" :class="{ flipped }">
      <div class="face front">
        <span class="label">Fråga {{ question.id }}</span>
        <p class="text">{{ question.question }}</p>
        <span class="hint">Klicka för att se svaret</span>
      </div>
      <div class="face back">
        <span class="label">Svar</span>
        <p class="text">{{ question.answer }}</p>
        <p v-if="question.tip" class="tip">💡 {{ question.tip }}</p>
        <span class="hint">Klicka för att se frågan igen</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Question } from '../types'

defineProps<{ question: Question }>()

const flipped = ref(false)
</script>

<style scoped>
.card-wrapper {
  perspective: 1200px;
  cursor: pointer;
  height: 100%;
  min-height: 280px;
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 280px;
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 16px;
}

.card.flipped {
  transform: rotateY(180deg);
}

.face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 16px;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
}

.front {
  background: #1e293b;
  border: 1px solid #334155;
}

.back {
  background: #0f2e1e;
  border: 1px solid #16a34a;
  transform: rotateY(180deg);
  overflow-y: auto;
}

.label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #64748b;
}

.back .label {
  color: #4ade80;
}

.text {
  flex: 1;
  font-size: 15px;
  line-height: 1.65;
  color: #e2e8f0;
  white-space: pre-wrap;
}

.tip {
  font-size: 13px;
  line-height: 1.5;
  color: #fbbf24;
  background: rgba(251, 191, 36, 0.08);
  border-left: 3px solid #fbbf24;
  padding: 10px 14px;
  border-radius: 4px;
  white-space: pre-wrap;
}

.hint {
  font-size: 12px;
  color: #475569;
  text-align: center;
  margin-top: auto;
}
</style>
