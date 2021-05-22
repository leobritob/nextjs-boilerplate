import styled from 'styled-components'

export const Desktop = styled.div`
  display: none;
  @media (min-width: 992px) {
    display: block;
  }
`

export const Tablet = styled.div`
  display: none;
  @media (min-width: 768px and max-width: 991px) {
    display: block;
  }
`

export const Mobile = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`

export const TableAndDesktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`

export const MobileAndTablet = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
`
