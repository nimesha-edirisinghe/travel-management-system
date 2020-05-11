import React from 'react';
import './NewsSection.scss';
import blog1 from 'app/assets/images/news/blog-1-1.jpg';
import blog2 from 'app/assets/images/news/blog-2.jpg';
import blog3 from 'app/assets/images/news/blog-3.jpg';
import NewsCard from './components';

const NewsSection = () => {
  return (
    <div className="home-news-root">
      <div className="home-inner-root">
        <div className="news-main-title-wrapper">Latest blog posts</div>
        <div className="news-sub-title-wrapper">News & updates</div>
        <div className="news-body-wrapper">
          <div className="news-card-root">
            <NewsCard
              imagePath={blog1}
              uploadedBy="Admin"
              numberOfComments={3}
              uploadedDate="02 May 2020"
              description="We ensure you that your journey is comfortable and safe"
            />
          </div>
          <div className="news-card-root">
            <NewsCard
              imagePath={blog2}
              uploadedBy="Admin"
              numberOfComments={1}
              uploadedDate="01 May 2020"
              description="Car with private and discreet cabman for a service"
            />
          </div>
          <div className="news-card-root">
            <NewsCard
              imagePath={blog3}
              uploadedBy="Admin"
              numberOfComments={5}
              uploadedDate="03 May 2020"
              description="Our taxis commit to make your trips unique"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
