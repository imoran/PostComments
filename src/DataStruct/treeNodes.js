export class PostNode {
  constructor(title="", content="", votes=0) {
    this.title = title;
    this.content = content;
    this.comments = [];
    this.votes = votes;
  }
}

export class CommentNode {
  constructor(content="", votes=0, parent=null) {
    this.content = content;
    this.comments = [];
    this.votes = votes;
    this.parent = parent;
    this.margin = 0;
  }
}
