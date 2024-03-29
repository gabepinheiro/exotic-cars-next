import styled, { css } from 'styled-components'

import { ContainerContent } from '~/layouts'

export const HeaderWrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    padding: 25px 0;
    box-shadow: 0px 10px 30px #0000001A;
    position: relative;
    z-index: 1;

    ${ContainerContent} {
      display: flex;
      align-items: center;

      @media (min-width: 786px) {
        justify-content: space-between;
      }
    }
  `}
`

export const LogoWrapper = styled.div`
  a {
    text-decoration: none;
    color: currentColor;
  }

  @media (max-width: 786px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1.8rem;
`

export const MenuFull = styled.menu<{isOpen: boolean}>`
  ${({ isOpen }) => css`
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    ${ButtonsWrapper} {
      flex-direction: column;
      gap: 1.6rem;
    }
  `}
`

export const CloseIconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top:0;
  left: 0;
  margin: 1.8rem;
`
