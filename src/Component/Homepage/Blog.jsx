import React from 'react';

function Blog({ title, content, imgSrc }) {
    return (
      <div>
        <h2>{title}</h2>
        <img src={imgSrc}  />
        <p>{content}</p>
      </div>
    );
  }
export default Blog;