import { Flex, Spinner } from '@chakra-ui/react'
import { SpinnerUI, LabelUI } from 'components/Loader/styles'
import { LoaderProps } from 'components/Loader/types'

export default function Loader({ tiny = false }: LoaderProps) {
  if (tiny) {
    return <Spinner size="xs" />
  }
  return (
    <Flex direction="column" align="center">
      <SpinnerUI size="xl" />
      <LabelUI>Loading...</LabelUI>
    </Flex>
  )
}
