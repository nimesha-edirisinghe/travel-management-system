import React from 'react';
import './BlogPage.scss';
import { MyNavBar } from 'app/components';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="blog-navbar">
        <MyNavBar />
      </div>
      <div className="blog-content-wrapper">
        <div className="blog-inner-wrapper">x</div>
      </div>
    </div>
  );
};

export default BlogPage;
