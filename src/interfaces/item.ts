export interface Story {
  id: string // actually number
  deleted?: boolean
  type: 'story'
  by: string
  time: number
  kids: string[] // actually number[]
  url: string
  score: number
  title: string
  descendants: number
}
