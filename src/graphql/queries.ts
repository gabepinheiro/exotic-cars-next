import { gql } from 'graphql-request'

export const GET_CARS = gql`
  query getCars ($first: Int){
    cars (first: $first){
      id
      brand
      model
      slug
      brandImage {
        url
      }
      thumb {
        url
      }
      rent {
        amount
        per
      }
      colors {
        color
        image {
          url
        }
      }
    }
  }
`
