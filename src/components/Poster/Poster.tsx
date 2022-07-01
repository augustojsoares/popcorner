import { PosterProps } from 'components/Poster/types'
import { ImageUI } from 'components/Poster/styles'
import { IMAGE_URL, IMAGE_SMALL, IMAGE_LARGE } from 'config'
import posterPlaceholder from 'assets/posterPlaceholder.png'

export default function Poster({ src, large = false }: PosterProps) {
  return (
    <ImageUI
      src={`${IMAGE_URL}${large ? IMAGE_LARGE : IMAGE_SMALL}/${src}`}
      fallbackSrc={posterPlaceholder}
      islarge={large.toString()}
    ></ImageUI>
  )
}
