import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {
  render() {
    const post = this.props.post;
    return (
      <div className="post">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        {post.comments.map((c, idx) => (
          <Comment comments={c} key={Math.random() * 10000000} />
        ))}
      </div>
    );
  }
}

export default Post;
