import { NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'
import {
  FilterContainerUI,
  TitleBlockUI,
  DateBlockUI,
  FilterInputUI,
  ClearButtonUI,
  CloseIconUI,
  NumberInputUI,
  NumberInputStepperUI,
  NumberInputFieldUI,
} from 'components/FilterBar/styles'
import { FilterBarProps, Event } from 'components/FilterBar/types'

export default function FilterBar({
  filter,
  setFilter,
  releaseDate,
  setReleaseDate,
}: FilterBarProps) {
  const handleOnChangeFilter = ({ target: { value } }: Event) => {
    setFilter(value)
  }
  const handleOnChangeDate = (value: string) => {
    setReleaseDate(value)
  }
  const handleClearFilters = () => {
    setFilter('')
    setReleaseDate('')
  }

  return (
    <FilterContainerUI>
      <TitleBlockUI>
        <div>Title: </div>
        <FilterInputUI
          value={filter}
          onChange={handleOnChangeFilter}
          aria-label="Filter by movie title"
        />
      </TitleBlockUI>
      <DateBlockUI>
        <div>Relase Year: </div>
        <NumberInputUI
          min={1888}
          max={2030}
          precision={0}
          value={releaseDate}
          placeholder={'2022'}
          onChange={handleOnChangeDate}
          aria-label="Filter by release year"
          isDisabled={!filter}
        >
          <NumberInputFieldUI />
          <NumberInputStepperUI>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepperUI>
        </NumberInputUI>
        <ClearButtonUI
          aria-label="Clear filter"
          icon={<CloseIconUI />}
          onClick={handleClearFilters}
          colorScheme="blue"
          size="lg"
        />
      </DateBlockUI>
    </FilterContainerUI>
  )
}
