import { useCallback, useState, useMemo } from 'react'
import dynamic from 'next/dynamic'
import { Car } from '~/resources'
import { ButtonLink } from '~/components'

import * as S from './styles'

const CarSlider = dynamic(() => import('~/components/car-slider'), { ssr: false })

type Props = {
  car: Car
}

export const CarDetailsTemplate = ({ car }: Props) => {
  const [carColorIndex, setCarColorIndex] = useState<number>(0)

  const slideItems = useMemo(() => {
    return car.colors.map(({ image }) => ({ image }))
  }, [car])

  const handleChangeColorIndex = useCallback((index: number) => {
    setCarColorIndex(index)
  }, [])

  return (
    <S.Wrapper>
      {car && (
        <>
          <S.CarInfo>
            <S.BrandImage
              src={car.brandImage}
              alt={`${car.brand} ${car.model}`}
            />
            <S.BrandModelRentWrapper>
              <S.BrandModel>{car.brand} {car.model}</S.BrandModel>
              <S.Rent>{car.rent.amount}/{car.rent.per}</S.Rent>
            </S.BrandModelRentWrapper>
          </S.CarInfo>
          <S.CarImageWrapper>
            <ButtonLink
              href='/'
              reverse='true'
              variant='outlined'
            >
              Back to catalog
            </ButtonLink>
            <S.CarImage
              src={car.colors[carColorIndex].image}
              alt={car.model}
            />
            <S.Color>
              <span>{String(carColorIndex + 1).padStart(2, '0')}</span>
              <span className='colorName'>{car.colors[carColorIndex].color}</span>
            </S.Color>
          </S.CarImageWrapper>
          <S.Center>
            <ButtonLink href='#'>Book now</ButtonLink>
          </S.Center>

          <S.SliderWrapper>
            <CarSlider
              items={slideItems}
              onChangeColorIndex={handleChangeColorIndex}
            />
          </S.SliderWrapper>
        </>
      )}
    </S.Wrapper>
  )
}
