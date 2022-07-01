import { CircularProgress, useMediaQuery } from '@chakra-ui/react'
import { ScoreDonutProps } from 'components/ScoreDonut/types'
import { CircularProgressLabelUI } from 'components/ScoreDonut/styles'
import { getColor } from 'utils'

export default function ScoreDonut({ vote_average, large = false }: ScoreDonutProps) {
  const [upTo1200, upTo1000, upTo800] = useMediaQuery([
    '(max-width: 1200px)',
    '(max-width: 1000px)',
    '(max-width: 800px)',
  ])
  return (
    <div>
      <CircularProgress
        value={vote_average * 10}
        color={getColor(vote_average)}
        size={`${large ? (upTo1200 ? (upTo1000 ? '80' : '130') : '200') : upTo800 ? '50' : '80'}px`}
        thickness="15px"
      >
        <CircularProgressLabelUI>
          {vote_average ? `${vote_average * 10}%` : 'NR'}
        </CircularProgressLabelUI>
      </CircularProgress>
    </div>
  )
}
