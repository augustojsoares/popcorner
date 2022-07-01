import styled from '@emotion/styled'

export const MainContainerUI = styled.main`
  padding: 150px 50px 0;
  background-color: #f8f8f8;
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    padding: 100px 10px 10px;
    min-height: calc(100vh - 100px);
  }
  @media (max-width: 500px) {
    padding: 80px 10px 10px;
    min-height: calc(100vh - 80px);
  }
`
