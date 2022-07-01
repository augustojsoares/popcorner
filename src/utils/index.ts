import { FILTERS_STORAGE_KEY } from 'config'

const getDefaultParams = () => {
  const defaultParams = {
    filter: '',
    releaseDate: '',
    page: 1,
  }
  storage.set(FILTERS_STORAGE_KEY, defaultParams)
  return defaultParams
}

export const storage = {
  get: (key: string) => {
    const stored = localStorage.getItem(key)
    if (stored) {
      return JSON.parse(stored)
    }
    return getDefaultParams()
  },
  set: (key: string, value: string | object) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
}

export const getColor = (vote_average: number): string => {
  const hue = (vote_average * 12).toString(10)
  return ['hsl(', hue, ',100%,40%)'].join('')
}

export const getRotatingColorScheme = (index: number): string => {
  const colorSchemes = [
    'whatsapp',
    'twitter',
    'red',
    'orange',
    'yellow',
    'green',
    'telegram',
    'teal',
    'blackAlpha',
    'linkedin',
    'blue',
    'cyan',
    'purple',
    'facebook',
    'pink',
    'messenger',
    'gray',
  ]
  return colorSchemes[index % 17]
}
