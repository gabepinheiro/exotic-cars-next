import { ReactComponent as TopArrowIcon } from './top-arrow.svg'
import * as S from './style'

export const ScrollTopButton = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    })
  }

  return (
    <S.Wrapper onClick={handleScrollTop}>
      <TopArrowIcon />
    </S.Wrapper>
  )
}
