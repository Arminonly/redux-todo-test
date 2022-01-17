import { combineReducers } from 'redux'
import { myReducer } from './reducers/reducers'

export default combineReducers({
  reducer: myReducer,
})
