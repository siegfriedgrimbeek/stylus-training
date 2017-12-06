//External Dependancies
import React from 'react';

const BlogPost = ({id, title, body, user}) => {
  return (
    <div className="blog-post">
      <span className="blog-id">{id}</span>
      <h2 className="blog-title">{title}</h2>
      <div className="blog-body">{body}</div>
      <span className="blog-user-id">{user}</span>
    </div>
  );
}

export default BlogPost;
