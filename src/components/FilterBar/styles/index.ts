import styled from '@emotion/styled'
import { css } from '@emotion/react'
import {
  Input,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

export const FilterContainerUI = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;

  @media (max-width: 850px) {
    flex-direction: column;
    height: 120px;
    margin-bottom: 20px;
  }
`

const BlockUI = css`
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 850px) {
    margin-top: 10px;
  }
`

export const TitleBlockUI = styled.div`
  ${BlockUI}
`
export const DateBlockUI = styled.div`
  ${BlockUI}
`

const InputUI = css`
  height: 48px;
  border-radius: 5px;
  font-size: 1.5rem;
  background-color: white;
  margin-left: 20px;
  margin-right: 20px;
`

export const FilterInputUI = styled(Input)`
  ${InputUI}
`

export const ClearButtonUI = styled(IconButton)`
  background-color: #2090ff;
`

export const CloseIconUI = styled(CloseIcon)`
  color: white;
`
export const NumberInputUI = styled(NumberInput)`
  margin-right: 20px;
`

export const NumberInputStepperUI = styled(NumberInputStepper)`
  right: -15px;
`

export const NumberInputFieldUI = styled(NumberInputField)`
  ${InputUI}
`
