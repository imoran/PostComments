import React, { Component } from 'react';
import './App.css';
import Post from './Threads/Post';
import { PostNode, CommentNode } from './DataStruct/treeNodes';

let post = new PostNode("Post Title", "Post Content", 154);
let firstComment = new CommentNode("I am the first comment!", 23, post);
let secondComment = new CommentNode("I am the second comment!", 10, post);
let firstSubComment = new CommentNode("I am the first subcomment!", 4, firstComment);
let firstSubSubComment = new CommentNode("I am the first subcommentsubcomment!", 90, firstSubComment);
post.comments.push(firstComment);
post.comments.push(secondComment);
firstComment.comments.push(firstSubComment);
firstSubComment.comments.push(firstSubSubComment);


class App extends Component {
  render() {
    return (
      <div>
        <Post post={post} />
      </div>
    );
  }
}

export default App;
