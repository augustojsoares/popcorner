import { Button, useMediaQuery } from '@chakra-ui/react'
import { PageControlUI, PageLabelUI } from 'components/PageControl/styles'
import { PageControlProps } from 'components/PageControl/types'

export default function PageControl({ total_pages, page, setPage }: PageControlProps) {
  const [upTo550] = useMediaQuery(['(max-width: 550px)'])
  const loadPrevious = () => setPage(page - 1)
  const loadNext = () => setPage(page + 1)
  return (
    <PageControlUI>
      <Button type="button" onClick={loadPrevious} colorScheme="blue" disabled={page <= 1}>
        {`<< ${upTo550 ? '' : 'Previous Page'}`}
      </Button>
      <PageLabelUI>{` Page ${page} of ${total_pages} `}</PageLabelUI>
      <Button type="button" onClick={loadNext} colorScheme="blue" disabled={page >= total_pages}>
        {`${upTo550 ? '' : 'Next Page'} >>`}
      </Button>
    </PageControlUI>
  )
}
