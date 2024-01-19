import { useReducer } from 'react'
import { InitialInputValues } from '../consts'
import { FormReducerAction, Sub } from '../types/types'

interface FormState {
    inputValues: Sub
  }

const formReducer = (state: FormState['inputValues'], action: FormReducerAction) => {
  switch (action.type) {
    case 'change_value': {
      const { inputName, inputValue } = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
    }
    case 'clear':
      return InitialInputValues
  }
}

const useNewSubForm = () => {
  return useReducer(formReducer, InitialInputValues)
}

export default useNewSubForm
