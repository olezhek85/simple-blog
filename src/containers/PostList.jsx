import * as R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { List, Loader } from 'semantic-ui-react'

import Post from '../components/Post'
import { fetchPosts } from '../actions/postsActions'
import { getPosts, isPostsFetching, getPostsError } from '../selectors'

@connect(
  state => ({
    posts: getPosts(state),
    loading: isPostsFetching(state),
    error: getPostsError(state),
  }),
  {
    fetchPosts,
  }
)
class PostList extends React.Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape()),
    loading: PropTypes.bool,
    error: PropTypes.string,
    fetchPosts: PropTypes.func,
  }

  static defaultProps = {
    posts: [],
    loading: false,
    error: '',
    fetchPosts: () => {},
  }

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts, loading, error } = this.props

    if (loading) {
      return <Loader />
    }

    if (error) {
      return 'Sorry dude, something went wrong!'
    }

    return (
      <div>
        {!R.isEmpty(posts) ? (
          <List divided relaxed>
            {R.map(
              post => (
                <Post key={post.id} post={post} />
              ),
              posts
            )}
          </List>
        ) : (
          'Nothing is here'
        )}
      </div>
    )
  }
}

export default PostList
