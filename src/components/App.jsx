import React from 'react'
import { Container, Header, Icon } from 'semantic-ui-react'
import { Route, Switch, Link } from 'react-router-dom'

import PostList from '../containers/PostList'
import PostDetails from '../containers/PostDetails'

export default function App() {
  return (
    <Container>
      <Header as="h2" style={{ marginTop: '1rem' }}>
        <Link to="/">
          <Icon circular name="comment outline" color="teal" />
          Simple Blog
        </Link>
      </Header>
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route path="/posts/:postId" component={PostDetails} />
      </Switch>
    </Container>
  )
}
