import React from 'react'
import * as R from 'ramda'
import PropTypes from 'prop-types'
import { Comment, Header } from 'semantic-ui-react'

const CommentsList = ({ comments }) => {
  return comments ? (
    <React.Fragment>
      <Header as="h3" dividing>
        Comments
      </Header>

      {R.map(
        comment => (
          <Comment key={comment.id}>
            <Comment.Avatar src={`http://i.pravatar.cc/50?img=${comment.id}`} />
            <Comment.Content>
              <Comment.Text>{comment.body}</Comment.Text>
            </Comment.Content>
          </Comment>
        ),
        comments
      )}
    </React.Fragment>
  ) : null
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

export default CommentsList
