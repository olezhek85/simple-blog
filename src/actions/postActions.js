import axios from '../utils/axios'
import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from './actionTypes'

export const fetchPostRequest = () => ({ type: FETCH_POST_REQUEST })

export const fetchPostSuccess = post => ({
  type: FETCH_POST_SUCCESS,
  post,
})

export const fetchPostFailure = error => ({
  type: FETCH_POST_FAILURE,
  error,
})

export const fetchPost = postId => async dispatch => {
  dispatch(fetchPostRequest())
  try {
    const { data } = await axios.get(`/posts/${postId}`, {
      params: {
        _embed: 'comments',
      },
    })
    dispatch(fetchPostSuccess(data))
  } catch (error) {
    dispatch(fetchPostFailure(error))
  }
}
