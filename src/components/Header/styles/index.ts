import styled from '@emotion/styled'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export const LinkUI = styled(Link)`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  background: dodgerblue;
  z-index: 1;
  color: white;
  text-decoration: none;

  @media (max-width: 850px) {
    height: 100px;
  }
  @media (max-width: 500px) {
    height: 80px;
  }
`

export const LogoUI = styled(Image)`
  height: 5rem;
  margin-left: 50px;
  margin-right: 30px;

  @media (max-width: 850px) {
    height: 3rem;
  }
`

export const TitleUI = styled.div`
  font-family: 'Bungee Shade', cursive;
  font-size: 5rem;
  color: white;

  @media (max-width: 850px) {
    font-size: 3rem;
  }
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`
