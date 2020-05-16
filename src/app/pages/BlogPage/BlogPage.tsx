import React from 'react';
import './BlogPage.scss';
import { MyNavBar } from 'app/components';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="blog-navbar">
        <MyNavBar />
      </div>
    </div>
  );
};

export default BlogPage;
