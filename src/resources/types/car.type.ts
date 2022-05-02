export type CarColor = {
  id: string
  color: string
  image: string
}

export type Car = {
  id: string
  brand: string
  model: string
  brandImage: string
  thumb: string
  rent: {
    amount: number
    per: string
  }
  colors: CarColor[]
}
