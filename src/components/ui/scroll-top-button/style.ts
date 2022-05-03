import styled from 'styled-components'

export const Wrapper = styled.button`
  border: 0;
  background-color: #e6d3f1;
  width: 7.3rem;
  height: 7.3rem;
  border-radius: 50%;
  box-shadow: 4px 19px 33px -11px rgba(0,0,0,0.37);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right:5vw;
  bottom:5vh;
  transition: opacity 0.2s ease-in;
  &:hover {
    opacity: 0.8;
  }
`
