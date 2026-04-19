import { reactive, watch } from 'vue'

const STORAGE_KEY = 'java-a11y'

function load() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }
  catch { return {} }
}

export const a11y = reactive({
  fontSize: 18,
  lineHeight: 1.8,
  dyslexicFont: false,
  focusMode: false,
  ...load(),
})

watch(a11y, () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...a11y }))
}, { deep: true })
