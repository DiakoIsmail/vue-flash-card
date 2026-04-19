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
