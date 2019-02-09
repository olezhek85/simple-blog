import axios from '../utils/axios'
import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from './actionTypes'

export const addCommentRequest = () => ({ type: ADD_COMMENT_REQUEST })

export const addCommentSuccess = () => ({
  type: ADD_COMMENT_SUCCESS,
})

export const addCommentFailure = error => ({
  type: ADD_COMMENT_FAILURE,
  error,
})

export const addComment = (postId, body) => async dispatch => {
  dispatch(addCommentRequest())
  try {
    await axios.post('/comments', {
      postId,
      body,
    })
    dispatch(addCommentSuccess())
  } catch (error) {
    dispatch(addCommentFailure(error))
  }
}
