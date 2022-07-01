import styled from '@emotion/styled'
import { Breadcrumb } from '@chakra-ui/react'

export const BreadcrumbUI = styled(Breadcrumb)`
  margin-top: 50px;
  font-size: 1.5rem; ;
`

export const MovieDetailUI = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 50px;
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding-right: 50px;

  @media (max-width: 850px) {
    flex-direction: column;
    padding-right: 0px;
  }
`

export const TitleUI = styled.h1`
  font-size: 3rem;
  color: black;
  text-decoration: none;
  & h1 {
    margin: 0;
  }

  @media (max-width: 1600px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.6rem;
  }
`
export const TranslatedTitleUI = styled.div`
  font-size: 2rem;
  color: grey;

  @media (max-width: 1600px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`

export const OverviewUI = styled.div`
  font-size: 2.2rem;

  @media (max-width: 1600px) {
    font-size: 1.9rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.1rem;
  }
`

export const InfoContainerUI = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding-left: 50px;
  margin-bottom: 50px;
  margin-top: 50px;
  width: 100px;

  @media (max-width: 850px) {
    width: 100%;
    padding-right: 50px;
  }
`

export const TitleBlockUI = styled.div`
  @media (max-width: 850px) {
    width: 100%;
  }
`

export const DateUI = styled.div`
  font-size: 1.5rem;

  @media (max-width: 1600px) {
    font-size: 1.4rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`

export const InfoBlockUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 850px) {
    margin-top: 20px;
    flex-direction: column;
  }
`
