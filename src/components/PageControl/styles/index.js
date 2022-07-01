import styled from '@emotion/styled'

export const PageControlUI = styled.div`
  height: 50px;
  margin-right: 10px;
`

export const PageLabelUI = styled.span`
  width: 180px;
  display: inline-block;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;

  @media (max-width: 850px) {
    font-size: 1rem;
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
  }
`
