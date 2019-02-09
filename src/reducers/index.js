import { combineReducers } from 'redux'
import post from './postReducer'
import posts from './postsReducer'
import comment from './commentReducer'

export default combineReducers({
  posts,
  post,
  comment,
})
