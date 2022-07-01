import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ChakraProvider } from '@chakra-ui/react'
import { queryClient } from 'lib/react-query'
import MovieList from 'features/MovieList/components/MovieList/MovieList'
import { MovieDetail } from 'features'
import { Header } from 'components'
import { MainContainerUI } from 'styles'

export default function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Header />
          <MainContainerUI>
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="/movie/:movieId" element={<MovieDetail />} />
            </Routes>
          </MainContainerUI>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </ChakraProvider>
  )
}
