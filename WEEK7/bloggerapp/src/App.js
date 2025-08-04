import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [showBook, setShowBook] = useState(true);
  const [showBlog, setShowBlog] = useState(false);
  const [flag] = useState(true); // used for if/else rendering

  return (
    <div className="App">
      <h1>📚 Blogger App</h1>

      {/* if/else rendering */}
      {flag ? (
        <p>Welcome to the Blogger Platform</p>
      ) : (
        <p>You are not logged in</p>
      )}

      {/* ternary operator rendering */}
      {showBook ? <BookDetails /> : <BlogDetails />}

      {/* && conditional rendering */}
      {showBlog && <BlogDetails />}

      {/* always visible */}
      <CourseDetails />

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setShowBook(!showBook)}>Toggle Book/Blog</button>
        <button onClick={() => setShowBlog(!showBlog)}>Toggle Blog Visibility</button>
      </div>
    </div>
  );
}

export default App;
