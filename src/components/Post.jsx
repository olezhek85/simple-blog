import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'

const Post = ({ post }) => (
  <List.Item>
    <List.Icon name="file outline" size="large" verticalAlign="middle" />
    <List.Content>
      <List.Header as={Link} to={`/posts/${post.id}`}>
        {post.title}
      </List.Header>
      {post.body}
    </List.Content>
  </List.Item>
)

Post.propTypes = {
  post: PropTypes.shape().isRequired,
}

export default Post
