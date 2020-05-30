import React from 'react';
import './BlogPage.scss';
import { MyNavBar, MyRow, MyCol } from 'app/components';
import blogImage1 from 'app/assets/images/news/blog-1-1.jpg';
import FooterSection from '../HomePage/components/FooterSection';
import BlogCard from './components';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="blog-navbar">
        <MyNavBar />
      </div>
      <div className="blog-content-wrapper">
        <div className="blog-header"> x</div>
        <div className="blog-inner-wrapper">
          <div className="blog-inner-content-wrapper">
            <MyRow gutter={[20, 20]}>
              <MyCol span={12}>
                <div className="card-wrapper">
                  <BlogCard
                    date="20 Feb 2020"
                    imagePath={blogImage1}
                    uploadedBy="By Admin"
                    noOfComments="3"
                    description="There are many variations of passages of lorem ipsum available but the majority have suffered alteration..."
                    title="We ensure you that your journey is comfortable and safe"
                  />
                </div>
              </MyCol>
              <MyCol span={12}>
                <div className="card-wrapper">x</div>
              </MyCol>
              <MyCol span={12}>
                <div className="card-wrapper">x</div>
              </MyCol>
              <MyCol span={12}>
                <div className="card-wrapper">x</div>
              </MyCol>
              <MyCol span={12}>
                <div className="card-wrapper">x</div>
              </MyCol>
              <MyCol span={12}>
                <div className="card-wrapper">x</div>
              </MyCol>
              <MyCol span={12}>
                <div className="card-wrapper">x</div>
              </MyCol>
              <MyCol span={12}>
                <div className="card-wrapper">x</div>
              </MyCol>
              <MyCol span={12}>
                <div className="card-wrapper">x</div>
              </MyCol>
              <MyCol span={12}>
                <div className="card-wrapper">x</div>
              </MyCol>
            </MyRow>
          </div>
        </div>
        <div className="blog-footer">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
