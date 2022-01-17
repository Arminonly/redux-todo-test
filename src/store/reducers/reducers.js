import {
  ADD_TODOS,
  ADD_TEXT_INPUTING,
  ADD_VALIDATION,
} from '../actions/actions'

const initialState = {
  todos: [],
  textInputing: '',
  addValid: false,
}

export const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        ...state,
        todos: state.todos + action.payload,
      }
    case ADD_TEXT_INPUTING:
      return {
        ...state,
        textInputing: state.textInputing + action.payload,
      }
    case ADD_VALIDATION:
      return {
        ...state,
        addValid: state.addValid + action.payload,
      }

    default:
      return state
  }
}
