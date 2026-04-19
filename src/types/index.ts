export interface Question {
  id: number
  question: string
  answer: string
  tip?: string
}

export interface Category {
  id: string
  title: string
  color: string
  icon: string
  questions: Question[]
}

export type SectionType = 'text' | 'code' | 'tip' | 'warning' | 'info'
export type Level = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export interface LessonSection {
  type: SectionType
  heading?: string
  content: string
  language?: string
}

export interface Lesson {
  id: string
  title: string
  emoji: string
  estimatedMinutes: number
  level: Level
  summary: string
  sections: LessonSection[]
}

export interface LearningPath {
  id: string
  title: string
  subtitle: string
  color: string
  bgColor: string
  icon: string
  level: Level
  lessons: Lesson[]
}
