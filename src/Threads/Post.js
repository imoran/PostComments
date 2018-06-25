import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.refresh = this.refresh.bind(this);
    this.generateComment = this.generateComment.bind(this);
  }

  refresh() {
    this.setState({});
  }

  generateComment() {
    let comments = this.state.comments;
    let stack = [];
    let allComments = [];
    comments.forEach(comment => {
      comment.margin = 2;
      stack.unshift(comment);
    })
    while (stack.length > 0) {
      let node = stack.pop();
      let index = Math.random() * 10000000;
      allComments.push(<Comment comment={node} key={index} refresh={this.refresh}/>)
      node.comments.forEach(comment => {
        comment.margin = comment.parent.margin + 2;
        stack.push(comment)
      })
    }
    return allComments;
  }

  render() {
    const { title, content } = this.state;
    return (
      <div className="post">
        <h1>{title}</h1>
        <p>{content}</p>
        {this.generateComment()}
      </div>
    );
  }
}

export default Post;
