import React, { Component } from 'react';
import { CommentNode } from '../DataStruct/treeNodes';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.comments;
    this.state.newComment = '';
    this.state.voteStatus = 0;
    this.addComment = this.addComment.bind(this);
    this.saveComment = this.saveComment.bind(this);
    this.handleTextarea = this.handleTextarea.bind(this);
    this.upvote= this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);

    console.log("constructor ", this.state);
  }

  addComment() {
    let newComment = new CommentNode();
    this.state.comments.push(newComment);
    this.setState({});
  }

  saveComment() {
    this.setState({ content: this.state.newComment });
  }

  handleTextarea(e) {
    this.setState({ newComment: e.target.value });
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
    const { comments, content, newComment, votes } = this.state;
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
              <button onClick={this.upvote}>Upvote</button>
              <p>{votes}</p>
              <button onClick={this.downvote}>Downvote</button>
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
