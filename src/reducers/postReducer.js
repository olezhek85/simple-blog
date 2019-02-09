import * as R from 'ramda'
import createReducer from '../utils/createReducer'
import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from '../actions/actionTypes'

const initialState = {
  isFetching: false,
  post: {},
  error: '',
}

const post = createReducer(initialState, {
  [FETCH_POST_REQUEST](state) {
    return R.assoc('isFetching', true, state)
  },
  [FETCH_POST_SUCCESS](state, { post }) {
    return R.evolve(
      {
        isFetching: R.always(false),
        post: R.always(post),
      },
      state
    )
  },
  [FETCH_POST_FAILURE](state, { error }) {
    return R.evolve(
      {
        isFetching: R.always(false),
        error: R.always(error),
      },
      state
    )
  },
})

export default post
