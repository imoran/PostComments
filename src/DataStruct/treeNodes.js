export class PostNode {
  constructor(title="", content="", upvotes=0) {
    this.title = title;
    this.content = content;
    this.comments = [];
    this.upvotes = upvotes;
  }
}

export class CommentNode {
  constructor(content = "", upvotes=0) {
    this.content = content;
    this.comments = [];
    this.upvotes = upvotes;
  }
}

// this.state = {
//   content: '',
//   comments: [],
//   newComment: ''
// }
