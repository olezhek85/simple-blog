export const getPosts = state => state.posts.posts
export const isPostsFetching = state => state.posts.isFetching
export const getPostsError = state => state.posts.error

export const getPost = state => state.post.post
export const getPostComments = state => getPost(state).comments
export const isPostFetching = state => state.post.isFetching
export const getPostError = state => state.post.error

export const isCommentSubmitted = state => state.comment.isFetching
