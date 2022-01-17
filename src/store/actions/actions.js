export const ADD_TODOS = 'ADD_TODOS'
export const ADD_TEXT_INPUTING = 'ADD_TEXT_INPUTING'
export const ADD_VALIDATION = 'ADD_VALIDATION'

export const setTodos = (todos) => ({
  type: ADD_TODOS,
  payload: todos,
})

export const setTextInputing = (textInputing) => ({
  type: ADD_TEXT_INPUTING,
  payload: textInputing,
})

export const setAddValid = (addValid) => ({
  type: ADD_VALIDATION,
  payload: addValid,
})
