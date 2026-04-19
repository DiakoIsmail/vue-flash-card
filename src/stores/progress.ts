import { reactive, watch } from 'vue'

const STORAGE_KEY = 'java-progress'

function load(): Record<string, boolean> {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }
  catch { return {} }
}

export const progress = reactive<Record<string, boolean>>(load())

export function markComplete(lessonId: string) {
  progress[lessonId] = true
}

export function markIncomplete(lessonId: string) {
  delete progress[lessonId]
}

export function isComplete(lessonId: string): boolean {
  return !!progress[lessonId]
}

watch(progress, () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...progress }))
}, { deep: true })
