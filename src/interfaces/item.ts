export interface Story {
  id: number
  deleted?: boolean
  type: 'story'
  by: string
  time: number
  kids: number[]
  url: string
  score: number
  title: string
  descendants: number
}
