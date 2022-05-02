import { BiSearch as SearchIcon } from 'react-icons/bi'
import { MdLocationPin as PinIcon } from 'react-icons/md'
import { IoCalendarSharp as CalendarIcon } from 'react-icons/io5'

import * as S from './styles'

export const SearchBar = () => (
  <S.Wrapper>
    <S.LocationWrapper>
      <PinIcon />
      <S.Location>
        North Carolina, NC 90025
      </S.Location>
    </S.LocationWrapper>
    <S.DatesWrapper>
      <S.DateInputGroup>
        <CalendarIcon />
        <S.DateInput id='date' />
      </S.DateInputGroup>
      <S.DateInputGroup>
        <CalendarIcon />
        <S.DateInput id='date' />
      </S.DateInputGroup>
    </S.DatesWrapper>
    <S.SearchButton>
      <SearchIcon />
    </S.SearchButton>
  </S.Wrapper>
)
