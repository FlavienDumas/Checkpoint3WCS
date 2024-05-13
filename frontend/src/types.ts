export interface CountryType {
    id: number
    name: string
    code: string
    emoji: string
    continent: {
      id: number
      name: string
    }
}