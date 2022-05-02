import { Car } from '~/resources/types'

import * as S from './styles'

type CardCardProps = Omit<Car, 'id' | 'colors'>

export const CardCard = (car: CardCardProps) => (
  <S.CardWrapper>
     <S.Header>
        <S.BrandModelWrapper>
          <S.Brand>{car.brand}</S.Brand>
          <S.Model>{car.model}</S.Model>
        </S.BrandModelWrapper>
        <S.DotsWrapper>
          <S.Dot />
          <S.Dot />
          <S.Dot />
        </S.DotsWrapper>
      </S.Header>
      <S.ThumbWrapper>
        <S.Thumb src={car.thumb} alt={`${car.brand} ${car.model}`} />
      </S.ThumbWrapper>
      <S.Rent>
        {car.rent.amount}
        <span>/{car.rent.per}</span>
      </S.Rent>
  </S.CardWrapper>
)
