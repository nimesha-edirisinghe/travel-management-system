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
        <img src={imagePath} alt="" />
      </div>
      <div className="blog-card-middle-wrapper">x</div>
      <div className="blog-card-title-wrapper">x</div>
      <div className="blog-card-desc-wrapper">x</div>
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
