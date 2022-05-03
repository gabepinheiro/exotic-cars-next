import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { client } from '~/graphql/client'
import { GetCarBySlugQuery, GetCarsQuery } from '~/graphql/generated/graphql'
import { GET_CARS, GET_CAR_BY_SLUG } from '~/graphql/queries'
import { Car } from '~/resources'

type PageProps = {
  car: Car
}

type PageParams = {
  slug: string
}

const CarDetailsPage: NextPage<PageProps> = ({ car }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Loading...</p>
  }

  return <h1>{car.brand} - {car.model}</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { cars } = await client.request<GetCarsQuery>(GET_CARS, {
    first: 3,
  })

  const paths = cars.map(({ slug }) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<
  PageProps,
  PageParams
> = async ({ params }) => {
  const { car } = await client.request<GetCarBySlugQuery>(GET_CAR_BY_SLUG, {
    slug: params?.slug,
  })

  if (!car) {
    return { notFound: true }
  }

  return {
    props: {
      car: {
        id: car.id,
        brand: car.brand.toString(),
        model: car.model,
        slug: car.slug,
        brandImage: car.brandImage.url,
        thumb: car.thumb.url,
        colors: car.colors.map(({ image, color }) => ({
          image: image.url,
          color,
        })),
        rent: {
          amount: car.rent.amount,
          per: car.rent.per,
        },
      },
    },
  }
}

export default CarDetailsPage
