import axios from 'lib/axios'
import { useQuery } from 'react-query'
import { TOP_RATED_MOVIES_RESOURCE, SEARCH_MOVIES_RESOURCE } from 'config'
import { MoviesListResponse } from 'features/MovieList/types'

const getMoviesList = (page: number, query: string, year: string, signal?: any) => {
  const params = { page }

  if (query || year) {
    return axios.get<MoviesListResponse>(SEARCH_MOVIES_RESOURCE, {
      params: {
        page,
        year,
        query,
      },
      signal,
    })
  }

  return axios.get<MoviesListResponse>(TOP_RATED_MOVIES_RESOURCE, { params, signal })
}

export default function useGetMovies(page: number = 1, filter: string = '', releaseDate: string) {
  return useQuery(
    ['Movies', page, filter, releaseDate],
    ({ signal }) => getMoviesList(page, filter, releaseDate, signal),
    { keepPreviousData: true }
  )
}
