import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {
  constructor() {
    super();
    this.refresh = this.refresh.bind(this);
  }


  refresh() {
    this.setState({});
  }

  render() {
    const post = this.props.post;
    console.log(post);
    return (
      <div className="post">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        {post.comments.map((c, idx) => (
          <Comment comments={c} key={Math.random() * 10000000} refresh={this.refresh}/>
        ))}
      </div>
    );
  }
}

export default Post;
