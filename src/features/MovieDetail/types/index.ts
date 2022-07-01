export type MovieDetailsResponse = {
  original_title: string
  title: string
  overview: string
  vote_average: number
  poster_path: string
  release_date: string
  genres: Array<{
    id: number
    name: string
  }>
}
