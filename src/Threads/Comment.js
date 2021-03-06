import React, { Component } from 'react';
import { CommentNode } from '../DataStruct/treeNodes';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.state.newComment = '';
    this.state.voteStatus = 0;
    this.addComment = this.addComment.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.handleTextarea = this.handleTextarea.bind(this);
    this.upvote = this.upvote.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.downvote = this.downvote.bind(this);
  }

  addComment() {
    console.log(this.state);
    let newComment = new CommentNode();
    newComment.parent = this.props.comment;
    this.state.comments.push(newComment);
    this.props.refresh();
  }

  saveComment() {
    this.setState({ content: this.state.newComment });
  }

  handleTextarea(e) {
    this.setState({ newComment: e.target.value });
  }

  deleteComment() {
    let parentComments = this.state.parent.comments;
    parentComments.forEach((el, idx) => {
      if (el === this.props.comment) {
        parentComments.splice(idx, 1);
        return;
      }
    });
    this.props.refresh();
  }

  upvote() {
    if (this.state.voteStatus === 0) {
      this.setState({
        votes: this.state.votes + 1,
        voteStatus: 1
      });
    } else if (this.state.voteStatus === 1) {
      this.setState({
        votes: this.state.votes - 1,
        voteStatus: 0
      });
    } else if (this.state.voteStatus === -1) {
      this.setState({
        votes: this.state.votes + 2,
        voteStatus: 1
      })
    }
  }

  downvote() {
    if (this.state.voteStatus === 0) {
      this.setState({
        votes: this.state.votes - 1,
        voteStatus: -1
      });
    } else if (this.state.voteStatus === -1) {
      this.setState({
        votes: this.state.votes + 1,
        voteStatus: 0
      });
    } else if (this.state.voteStatus === 1) {
      this.setState({
        votes: this.state.votes - 2,
        voteStatus: -1
      })
    }
  }


  render() {
    const { content, newComment, votes } = this.state;
    const style = {
      marginLeft: this.state.margin + 'em'
    };
    return (
      <div style={style} className="comment-border">
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
          <div className="add-delete-buttons">
            <button onClick={this.addComment}>Add Comment</button>
            <button onClick={this.deleteComment}>Delete Comment</button>
          </div>
          <div className="vote-group">
            <button onClick={this.upvote}>Upvote</button>
            <p>{votes}</p>
            <button onClick={this.downvote}>Downvote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;
