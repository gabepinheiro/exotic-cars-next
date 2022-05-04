import styled, { css } from 'styled-components'

export const FormWrapper = styled.form`
  ${({ theme }) => css`
    max-width: 100%;
    width: max(430px);
    border: 1.5px solid ${theme.colors.primary};
    border-radius: 1.4rem;
    padding: 2.4rem;
    box-shadow: 0px 3px 25px #00000014;
  `}
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
  margin-bottom: 4.0rem;
`
