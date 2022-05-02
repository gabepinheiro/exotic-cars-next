import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.text_secondary};
  `}

  height: 3.6rem;
  background-color: #F3F1FC;
  border-radius: 18px;
  padding: 1rem 0.5rem 1rem 2.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4.0rem;

  @media (max-width: 786px) {
    flex-direction: column;
    height: auto;
    padding: 1.6rem;
    gap: 1.6rem;
 }
`

export const SearchButton = styled.button`
  border: 0;
  border-radius: 50%;
  box-shadow: 0px 3px 15px #00000014;
  background-color: #fff;
  color: #7B89F4;
  width: 30px;
  height: 30px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-3px);
    opacity: 0.8;
  }

  @media (max-width: 786px) {
    width: 45px;
    height: 45px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    width: 20px;
    height: 20px;
    color: #C4C4C4;
  }
`

export const Location = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`

export const DatesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
`

export const DateInputGroup = styled.div`
  color: #C3C3C3;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    width: 20px;
    height: 20px;

    @media (max-width: 786px) {
      width: 30px;
      height: 30px;
    }
  }
`

export const DateInput = styled.input.attrs({
  type: 'date',
})`
  ${({ theme }) => css`
    font-family: ${theme.font};
    color: ${theme.colors.text_secondary};
    font-weight: bold;
  `}

  border: 0;
  background-color: transparent;
  font-size: 1.2rem;

  position: relative;
  outline: none;

   &::-webkit-inner-spin-button,
   &::-webkit-calendar-picker-indicator {
      display: none;
      -webkit-appearance: none;
  }
`
