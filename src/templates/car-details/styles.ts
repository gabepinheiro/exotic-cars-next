import styled from 'styled-components'

export const Wrapper = styled.section`
  margin-top: 5.2rem;

  @media (max-width: 786px) {
    margin-top: 4.2rem;
  }
`
export const CarInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 4.0rem;

  @media (max-width: 786px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`

export const BrandModel = styled.h2`
  font-size: 5.0rem;

  @media (max-width: 786px) {
    font-size: 3.6rem;
  }
`

export const BrandImage = styled.img`
  display: block;
  max-width: 100%;
`

export const Rent = styled.h3`
  font-size: 4.0rem;
  font-weight: lighter;

  @media (max-width: 786px) {
    font-size: 3.2rem;
  }
`

export const BrandModelRentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CarImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 786px) {
    margin: 3.8rem 0;
    flex-direction: column;
    justify-content: center;
    gap: 4.6rem;
  }
`

export const CarImage = styled.img`
  max-width: 75%;
  display: block;
  object-fit: cover;

  @media (max-width: 786px) {
    max-width: 100%;
  }
`

export const Color = styled.p`
  font-size: 5.0rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;

  @media (max-width: 786px) {
    align-self: initial;
    font-size: 3.2rem;

    .colorName {
      font-size: 1.8rem;
    }
  }

  .colorName {
    font-weight: 300;
    font-size: 3.2rem;
  }
`

export const Center = styled.div`
  margin-top: 2.4rem;
  display: flex;
  justify-content: center;
`

export const SliderWrapper = styled.div`
  margin: 6.4rem 0;

  @media (max-width: 786px) {
    margin: 4.2rem 0;
  }
`
