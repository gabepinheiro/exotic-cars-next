import styled, { css } from 'styled-components'

export const CardWrapper = styled.article`
  ${({ theme }) => css`
    background-color: ${theme.colors.shape};
    border-radius: 20px;
    padding: 2.3rem 1.7rem;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s ease-in;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0px 5px 10px rgba(0,0,0, 0.1);
    }
  `}
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

export const BrandModelWrapper = styled.div``

export const Brand = styled.h3`
  margin-bottom: 0.4rem;
`

export const Model = styled.p`
  font-weight: 100;
  text-transform: uppercase;
`

export const ThumbWrapper = styled.div`
  padding-top: 1.8rem;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Thumb = styled.img`
  width: 25rem;
  display: block;
  object-fit: cover;
`

export const Rent = styled.p`
  padding-top: 0.6rem;
  align-self: flex-end;
  font-size: 2.4rem;
  font-weight: bold;
  sup {
    font-size: 1.4rem;
  }
  span {
    font-size: 1.4rem;
    font-weight: 300;
  }
`

export const DotsWrapper = styled.div`
  display: flex;
  gap: 3px;
  transition: all 0.2s ease-in;
  &:hover {
    transform: translateY(-3px);
  }
`

export const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #C8C8CA ;
  box-shadow: 0px 5px 10px rgba(0,0,0, 0.1);
`
