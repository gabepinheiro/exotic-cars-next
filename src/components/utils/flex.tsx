import styled, { css } from 'styled-components'

type FlexProps = {
  column?: boolean
  justifyContent?: 'center'
  alignItems?: 'center'
  gap?: number
}

export const Flex = styled.div<FlexProps>`
  ${({ column = false, justifyContent, alignItems, gap }) => css`
    display: flex;
    flex-direction: ${!column ? 'row' : 'column'};

    ${!!justifyContent && css`
      justify-content: ${justifyContent};
    `}

    ${!!alignItems && css`
      align-items: ${alignItems};
    `}

    ${!!gap && css`
      gap: ${`${gap / 10}rem`};
    `}
  `}
`
