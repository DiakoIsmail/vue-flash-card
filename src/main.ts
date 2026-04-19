import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

// Handle redirect from 404.html on GitHub Pages
const redirect = new URLSearchParams(window.location.search).get('p')
if (redirect) {
  const url = new URL(window.location.href)
  url.searchParams.delete('p')
  url.pathname = '/vue-flash-card' + redirect
  window.history.replaceState(null, '', url)
}

createApp(App).use(router).mount('#app')
