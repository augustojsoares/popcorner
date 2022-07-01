import { MovieSummary } from 'features/MovieList/types'
import { ScoreDonut, Poster } from 'components'
import {
  CardUI,
  TitleUI,
  TranslatedTitleUI,
  InfoContainerUI,
  TitleBlockUI,
  InfoBlockUI,
} from 'features/MovieList/components/MovieListItem/styles'

export default function MovieListItem({
  title,
  original_title,
  vote_average,
  poster_path,
  release_date,
  id,
}: MovieSummary) {
  return (
    <CardUI to={`/movie/${id}`}>
      <Poster src={poster_path} />
      <InfoContainerUI>
        <TitleBlockUI>
          <TitleUI>{original_title} </TitleUI>
          {original_title !== title && <TranslatedTitleUI>({title})</TranslatedTitleUI>}
        </TitleBlockUI>
        <InfoBlockUI>
          <div>Released: {release_date}</div>
          <ScoreDonut vote_average={vote_average} />
        </InfoBlockUI>
      </InfoContainerUI>
    </CardUI>
  )
}
