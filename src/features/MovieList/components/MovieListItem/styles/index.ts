import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

export const CardUI = styled(Link)`
  display: flex;
  height: 330px;
  width: 575px;
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  margin: 10px;
  text-decoration: none;
  color: black;
  &:hover {
    -webkit-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 850px) {
    width: 100%;
    height: 220px;
  }
`

export const TitleUI = styled.h1`
  font-size: 1.7rem;
  color: black;
  text-decoration: none;
  & h1 {
    margin: 0;
  }
`
export const TranslatedTitleUI = styled.div`
  font-size: 1rem;
  color: grey;
`

export const InfoContainerUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding-left: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
`

export const TitleBlockUI = styled.div``

export const InfoBlockUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
