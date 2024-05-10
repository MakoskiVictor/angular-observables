export interface Character {
  id: number
  name: string
  image: string
  status: string
}

export interface DataReceived {
  info: Info
  results: Character[]
}

export interface Info {
  pages: number
  next: string
}
