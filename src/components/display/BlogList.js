//External Dependancies
import React from 'react';

//Our Dependancies
import BlogPost from './BlogPost'

const BlogList = ({posts}) => {

  const postsList = posts.map((post, index) => {
    return (
    <BlogPost
      key={post.id}
      id={post.id}
      title={post.title}
      body={post.body}
      user={post.userId}
    />
    )
  });

  return (
    <div className="blog-list">
      {postsList}
    </div>
  );
}

export default BlogList;
