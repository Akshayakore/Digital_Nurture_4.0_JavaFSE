import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

 loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      console.log("Fetched posts:", data);  // ✅ Add this
      this.setState({ posts: data });
    })
    .catch(err => {
      console.error("Fetch error:", err);  // ✅ Add this
      this.setState({ hasError: true });
    });
}


  render() {
  return (
    <div>
      <h2>All Blog Posts</h2>
      {this.state.posts.map(post => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}


}

export default Posts;
