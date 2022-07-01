import { Image } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const ImageUI = styled(Image)`
  border-radius: 10px 0 0 10px;

  @media (max-width: 850px) {
    width: ${props => (props.islarge === 'true' ? '100%' : '147px')};
    ${props => (props.islarge === 'true' ? '' : 'height: 220px;')}
    ${props => (props.islarge === 'true' ? 'border-radius: 10px 10px 0 0;' : '')}
  }
`
