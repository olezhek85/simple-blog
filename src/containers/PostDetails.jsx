import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Loader, Header, Comment } from 'semantic-ui-react'
import { fetchPost } from '../actions'
import {
  getPost,
  getPostComments,
  isPostFetching,
  getPostError,
} from '../selectors'

import CommentsList from '../components/CommentsList'
import CommentForm from './CommentForm'

@connect(
  (state, ownProps) => ({
    post: getPost(state),
    comments: getPostComments(state),
    loading: isPostFetching(state),
    postId: ownProps.match.params.postId,
    error: getPostError(state),
  }),
  {
    fetchPost,
  }
)
class PostDetails extends React.Component {
  static propTypes = {
    post: PropTypes.shape(),
    comments: PropTypes.arrayOf(PropTypes.shape()),
    loading: PropTypes.bool,
    postId: PropTypes.string.isRequired,
    error: PropTypes.string,
    fetchPost: PropTypes.func.isRequired,
  }

  static defaultProps = {
    post: {},
    comments: [],
    loading: false,
    error: '',
  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId)
  }

  render() {
    const { post, comments, loading, error, postId } = this.props

    if (loading) {
      return <Loader />
    }

    if (error) {
      return 'Sorry dude, something went wrong!'
    }

    return (
      <React.Fragment>
        <Header as="h2">{post.title}</Header>
        <p>{post.body}</p>
        <Comment.Group>
          <CommentsList comments={comments} />
          <CommentForm postId={postId} />
        </Comment.Group>
      </React.Fragment>
    )
  }
}

export default PostDetails
