import styled, { css } from 'styled-components'

import { ContainerContent } from '~/layouts'

export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    height: 8.5rem;
    box-shadow: 0px 10px 30px #0000001A;

    ${ContainerContent} {
      display: flex;
      align-items: center;

      @media (min-width: 786px) {
        justify-content: space-between;
      }
    }
  `}
`
