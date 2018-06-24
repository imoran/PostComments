import React, { Component } from 'react';
import { CommentNode } from '../DataStruct/treeNodes';



class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.comments;
    this.state.newComment = '';
    this.addComment = this.addComment.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.handleTextarea = this.handleTextarea.bind(this);
    console.log("constructor ", this.state);
  }

  addComment() {
    let newComment = new CommentNode();
    this.state.comments.push(newComment);
    this.setState({});
    console.log("add ", this.state);
  }

  saveComment() {
    this.setState({ content: this.state.newComment });
    console.log("save ", this.state);
  }

  handleTextarea(e) {
    this.setState({ newComment: e.target.value })
    console.log("handle ", this.state);
  }

  render() {
    console.log("render ", this.state);
    const { comments, content, newComment, upvotes } = this.state;
    return (
      <div>
        <div className="comment-border">
          <h2>{content === '' ?
            <div className="comment-input">
              <textarea
                value={newComment}
                onChange={this.handleTextarea}>
              </textarea>
              <button onClick={this.saveComment}>Save Comment</button>
            </div>
            : content}</h2>
          <div className="comment-button-group">
            <button onClick={this.addComment}>Add Comment</button>
            <div className="vote-group">
              <button>Upvote</button>
              <p>{upvotes}</p>
              <button>Downvote</button>
            </div>
          </div>

        </div>
        {comments.map((c, idx) => (
          <div className="comment-margin" key={Math.random() * 10000000}>
            <Comment comments={c} />
          </div>
        ))}
      </div>
    );
  }
}

export default Comment;
