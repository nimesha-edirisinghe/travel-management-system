import React from 'react';
import './BlogCard.scss';

type Props = {
  imagePath: string;
  date?: string;
  noOfComments?: string;
  uploadedBy?: string;
  title?: string;
  description?: string;
};

const BlogCard = ({
  imagePath,
  date,
  noOfComments,
  uploadedBy,
  title,
  description,
}: Props) => {
  return (
    <div className="blog-card-root">
      <div className="blog-card-image-wrapper">
        <img src={imagePath} alt="" height="100%" width="100%" />
      </div>
      <div className="blog-card-middle-wrapper">
        <div className="blog-date-wrapper">
          <div className="blog-date-inner-wrapper">{date}</div>
        </div>
        <div className="blog-uploaded-by-wrapper">{uploadedBy}</div>
        <div className="blog-comment-wrapper">{noOfComments} Comments</div>
      </div>
      <div className="blog-card-title-wrapper">{title}</div>
      <div className="blog-card-desc-wrapper">{description}</div>
    </div>
  );
};

BlogCard.defaultProps = {
  imagePath: '',
  date: '',
  noOfComments: '',
  uploadedBy: '',
  title: '',
  description: '',
};

export default BlogCard;
