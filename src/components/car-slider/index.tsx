import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

import * as S from './styles'

type SlideItem = {
  image: string
}

type CarSliderProps = {
  items: SlideItem[]
  onChangeColorIndex: (index: number) => void
}

const CarSlider = ({ items, onChangeColorIndex }: CarSliderProps) => {
  return (
    <S.Wrapper>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={80}
        centeredSlides
        centeredSlidesBounds
        onSlideChange={({ realIndex }) => onChangeColorIndex(realIndex)}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        loop
        breakpoints={{
          786: {
            slidesPerView: 3,
          },
        }}
      >
        {items.map(({ image }, index) => (
          <SwiperSlide key={index}>
            <S.SliderItem>
              <S.CarImage src={image} />
            </S.SliderItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className='swiper-button-prev'>
        <BsArrowLeft />
      </button>
      <button className='swiper-button-next'>
        <BsArrowRight />
      </button>
    </S.Wrapper>
  )
}

export default CarSlider
