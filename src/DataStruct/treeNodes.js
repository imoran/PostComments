export class PostNode {
  constructor(title="", content="") {
    this.title = title;
    this.content = content;
    this.comments = [];
  }
}

export class CommentNode {
  constructor(content = "") {
    this.content = content;
    this.comments = [];
  }
}

// this.state = {
//   content: '',
//   comments: [],
//   newComment: ''
// }
