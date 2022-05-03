import styled, { css } from 'styled-components'

export const SliderItem = styled.div`
  background-color: red;
  width: 25.0rem;
  height: 20.0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background: linear-gradient(36deg, #d5d5d5, #d2d2d2);
  box-shadow: 0px 2px 30px #0000001a;
`

export const CarImage = styled.img`
  max-width: 100%;
  display: block;
  transform: translateX(3.6rem) scale(1.1);
  object-fit: cover;

  @media (max-width: 786px) {
    width: 25rem;
  }
`

export const Wrapper = styled.section`
  position: relative;
  z-index: 0;

  .swiper{
    padding: 1.8rem;
  }

  .swiper-wrapper {
    display: flex;
    align-items: flex-end;
    height: auto;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;

    &.swiper-slide-active{
      ${SliderItem} {
        width: 32.0rem;
        height: 25.0rem;
        background: linear-gradient(36deg, #b8b9f1, #dcd0f0);
        transform: translateY(-0.8rem);

        ${CarImage} {
          transform: translate(1.6rem, 1.6rem) scale(1.35);

          @media (max-width: 786px) {
            transform: none;
          }
        }
      }
    }
  }

  ${({ theme }) => css`
    button {
      width: 4.5rem;
      height: 4.5rem;
      background-color: ${theme.colors.text_primary};
      border-radius: 50%;
      border: 0;
      outline: none;
      color: #eee;

      transition: opacity 0.2s ease-in;

      &:hover {
        opacity: 0.7;
      }

      svg {
        width: 2.7rem;
        height: 2.7rem;
        font-weight: 300;
      }

      &::after {
        content: '';
      }
    }
  `}
`
