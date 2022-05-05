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

export const GET_CAR_BY_SLUG = gql`
  query getCarBySlug($slug: String!) {
    car(where: { slug: $slug }) {
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

export const CREATE_USER = gql`
  mutation CreateExoticUser($data: ExoticUserCreateInput!) {
    user: createExoticUser(data: $data) {
      id
      email
    }
  }
`

export const GET_USER_BY_EMAIL = gql`
  query getUserByEmail ($email: String!) {
    user: exoticUser (where: { email: $email }, stage: DRAFT) {
      name
      email
    }
  }
`
