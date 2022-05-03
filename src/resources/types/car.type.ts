export type CarColorProps = {
  color: string
  image: string
}

export type Car = {
  id: string
  brand: string
  model: string
  brandImage: string
  thumb: string
  slug: string
  rent: {
    amount: number
    per: string
  }
  colors: CarColorProps[]
}
