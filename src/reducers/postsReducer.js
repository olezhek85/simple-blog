import * as R from 'ramda'
import createReducer from '../utils/createReducer'
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../actions/actionTypes'

const initialState = {
  isFetching: false,
  posts: [],
  error: '',
}

const posts = createReducer(initialState, {
  [FETCH_POSTS_REQUEST](state) {
    return R.assoc('isFetching', true, state)
  },
  [FETCH_POSTS_SUCCESS](state, { posts }) {
    return R.evolve(
      {
        isFetching: R.always(false),
        posts: R.always(posts),
      },
      state
    )
  },
  [FETCH_POSTS_FAILURE](state, { error }) {
    return R.evolve(
      {
        isFetching: R.always(false),
        error: R.always(error),
      },
      state
    )
  },
})

export default posts
