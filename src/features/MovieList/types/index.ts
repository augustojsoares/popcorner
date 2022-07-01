export type MovieSummary = {
  original_title: string
  vote_average: number
  poster_path: string
  release_date: string
  title: string
  id: number
}

export type MoviesListResponse = {
  page: number
  total_pages: number
  results: Array<MovieSummary>
}
