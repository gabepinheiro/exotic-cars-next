import styled, { keyframes } from 'styled-components'

const loadAnimate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Loading = styled.div`
  border: 6px solid #999;
  border-radius: 50%;
  border-top: 6px solid #000;
  width: 100px;
  height: 100px;
  animation: ${loadAnimate} 0.8s linear infinite;
  @media (max-width: 786px) {
    width: 70px;
    height: 70px;
  }
`

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const LoadingOverlay = () => {
  return (
    <Wrapper>
      <Loading />
    </Wrapper>
  )
}
