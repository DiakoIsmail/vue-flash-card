import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import TutorialPathView from '../views/TutorialPathView.vue'
import TutorialLessonView from '../views/TutorialLessonView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/intervju', component: HomeView },
    { path: '/category/:id', component: CategoryView },
    { path: '/path/:pathId', component: TutorialPathView },
    { path: '/path/:pathId/lektion/:lessonId', component: TutorialLessonView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
