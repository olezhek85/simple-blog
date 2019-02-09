import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Form, Button, Message } from 'semantic-ui-react'
import { addComment } from '../actions'
import { isCommentSubmitted } from '../selectors'

@connect(
  state => ({
    loading: isCommentSubmitted(state),
  }),
  {
    addComment,
  }
)
class CommentForm extends React.Component {
  static propTypes = {
    loading: PropTypes.bool,
    addComment: PropTypes.func.isRequired,
    postId: PropTypes.string.isRequired,
  }

  static defaultProps = {
    loading: false,
  }

  state = {
    body: '',
    error: false,
  }

  handleReplyChange = e => {
    this.setState({ body: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    const { body } = this.state
    const { postId } = this.props

    if (!body) {
      this.setState({ error: true })
      return
    }

    this.props.addComment(postId, body)
    this.setState({ body: '', error: false })
  }

  render() {
    const { loading } = this.props
    const { body, error } = this.state

    return (
      <Form
        onSubmit={this.handleSubmit}
        style={{ marginTop: '1rem' }}
        error={error}
        loading={loading}
        reply
      >
        <Form.TextArea
          name="reply"
          autoHeight
          value={body}
          onChange={this.handleReplyChange}
        />
        <Message error content="Please enter something to reply this comment" />
        <Button content="Add Reply" primary />
      </Form>
    )
  }
}

export default CommentForm
