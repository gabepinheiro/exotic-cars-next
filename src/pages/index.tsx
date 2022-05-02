import { GetStaticProps } from 'next'
import { client } from '~/graphql/client'
import { GetCarsQuery } from '~/graphql/generated/graphql'
import { GET_CARS } from '~/graphql/queries'
import { Car } from '~/resources'
import { HomeTemplate } from '~/templates/home'

type HomeProps = {
  cars: Car[]
}

const Home = ({ cars }: HomeProps) => (
  <HomeTemplate cars={cars} />
)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const { cars } = await client.request<GetCarsQuery>(GET_CARS)

  const transformedCars = cars.map((car) => ({
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
  }))

  return {
    props: {
      cars: transformedCars,
    },
  }
}

export default Home
