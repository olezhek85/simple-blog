import axios from '../utils/axios'
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './actionTypes'

export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST })

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
})

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  error,
})

export const fetchPosts = () => async dispatch => {
  dispatch(fetchPostsRequest())
  try {
    const { data } = await axios.get('/posts')
    dispatch(fetchPostsSuccess(data))
  } catch (error) {
    dispatch(fetchPostsFailure(error))
  }
}
