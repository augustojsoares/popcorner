import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { BreadcrumbItem, BreadcrumbLink, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import { getRotatingColorScheme } from 'utils'
import { Loader, Poster, ScoreDonut } from 'components'
import { useGetMovieDetail } from 'features/MovieDetail/api'
import {
  BreadcrumbUI,
  MovieDetailUI,
  TitleUI,
  TranslatedTitleUI,
  OverviewUI,
  InfoContainerUI,
  TitleBlockUI,
  DateUI,
  InfoBlockUI,
} from 'features/MovieDetail/components/MovieDetail/styles'

export default function MovieDetail() {
  const { movieId } = useParams()
  const [error, setError] = useState('')
  const {
    data: {
      data: {
        title = '',
        original_title = '',
        overview = '',
        release_date = '',
        poster_path = '',
        vote_average = 0,
        genres = [],
      },
    } = { data: {} },
    isLoading,
  } = useGetMovieDetail(movieId || '', setError)

  if (isLoading) {
    return <Loader />
  }
  if (error) {
    return <p>Error finding movie. {error}</p>
  }

  return (
    <>
      <BreadcrumbUI separator={<ChevronRightIcon color="gray.500" />}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to={`/movie/${movieId}`}>
            {title}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbUI>
      <MovieDetailUI>
        <Poster src={poster_path} large />
        <InfoContainerUI>
          <TitleBlockUI>
            <TitleUI>{original_title} </TitleUI>
            {genres.map(({ name }, index) => (
              <Badge key={name} colorScheme={getRotatingColorScheme(index)} fontSize="1em">
                {name}
              </Badge>
            ))}
            {original_title !== title && <TranslatedTitleUI>({title})</TranslatedTitleUI>}
            <OverviewUI>{overview}</OverviewUI>
          </TitleBlockUI>
          <InfoBlockUI>
            <DateUI>Released: {release_date}</DateUI>
            <ScoreDonut vote_average={vote_average} large />
          </InfoBlockUI>
        </InfoContainerUI>
      </MovieDetailUI>
    </>
  )
}
