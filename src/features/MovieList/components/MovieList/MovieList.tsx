import { useState, useEffect } from 'react'
import MovieListItem from 'features/MovieList/components/MovieListItem/MovieListItem'
import { FilterBar, PageControl, Loader } from 'components'
import { PageControlWrapperUI, MovieListUI } from 'features/MovieList/components/MovieList/styles'
import { MovieSummary } from 'features/MovieList/types'
import { useGetMovies } from 'features/MovieList/api'
import { FILTERS_STORAGE_KEY } from 'config'
import { storage } from 'utils'

export default function MovieList() {
  const params = storage.get(FILTERS_STORAGE_KEY)
  const [page, setPage] = useState(params.page)
  const [filter, setFilter] = useState(params.filter)
  const [releaseDate, setReleaseDate] = useState(params.releaseDate)
  const { data, status, isFetching } = useGetMovies(page, filter, releaseDate)

  useEffect(() => {
    if (page !== 1) {
      setPage(1)
    }
    storage.set(FILTERS_STORAGE_KEY, { filter, releaseDate, page })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, releaseDate])

  useEffect(() => {
    storage.set(FILTERS_STORAGE_KEY, { filter, releaseDate, page })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  if (status === 'loading' && !data) {
    return <Loader />
  }

  return (
    <>
      <FilterBar {...{ filter, setFilter, releaseDate, setReleaseDate }} />
      <PageControlWrapperUI>
        <PageControl {...{ page, setPage, total_pages: data?.data.total_pages || 1 }} />{' '}
        {isFetching && <Loader tiny />}
      </PageControlWrapperUI>
      <MovieListUI>
        {data?.data.results.map((movie: MovieSummary) => (
          <MovieListItem {...movie} key={movie.id} />
        ))}
        {isFetching ? <div>Refreshing...</div> : ''}
      </MovieListUI>
    </>
  )
}
