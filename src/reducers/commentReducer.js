import * as R from 'ramda'
import createReducer from '../utils/createReducer'
import {
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
} from '../actions/actionTypes'

const initialState = {
  isFetching: false,
  error: '',
}

const comment = createReducer(initialState, {
  [ADD_COMMENT_REQUEST](state) {
    return R.assoc('isFetching', true, state)
  },
  [ADD_COMMENT_SUCCESS](state, { post }) {
    return R.assoc('isFetching', false, state)
  },
  [ADD_COMMENT_FAILURE](state, { error }) {
    return R.evolve(
      {
        isFetching: R.always(false),
        error: R.always(error),
      },
      state
    )
  },
})

export default comment
