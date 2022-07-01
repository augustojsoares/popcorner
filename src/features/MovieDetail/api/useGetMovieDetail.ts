import axios from 'lib/axios'
import { useQuery } from 'react-query'
import { MOVIE_DETAILS_RESOURCE } from 'config'
import { MovieDetailsResponse } from 'features/MovieDetail/types'

const getMovieDetail = (id: string, errorHandler: Function) =>
  axios.get<MovieDetailsResponse>(`${MOVIE_DETAILS_RESOURCE}${id}`).catch(error => {
    console.log(error.response.data.status_message)
    errorHandler(error.response.data.status_message)
  })

export default function useGetMovieDetail(id: string, errorHandler: Function) {
  return useQuery(['Movie', id], () => getMovieDetail(id, errorHandler))
}
