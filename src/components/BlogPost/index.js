import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {BlogInfo,BlogDetailsTitle,AuthorDetails,AuthorPic,BlogImage,BlogContent} from "./styledComponents"
import { AuthorName } from '../BlogItem/styledComponents';

const BlogPost = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    getBlogItemData();
  }); // Trigger effect whenever `id` changes

  const getBlogItemData = async () => {
    try {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      const updatedData = {
        title: data.title,
        imageUrl: data.image_url,
        content: data.content,
        avatarUrl: data.avatar_url,
        author: data.author,
      };

      setBlogData(updatedData);
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  const renderBlogPost = () => {
    const { title, imageUrl, content, avatarUrl, author } = blogData;

    return (
      <BlogInfo>
        <BlogDetailsTitle>{title}</BlogDetailsTitle>
        
        <BlogImage className="blog-image" src={imageUrl} alt={title} />
        <AuthorDetails>
          <AuthorPic className="author-pic" src={avatarUrl} alt={author} />
          <AuthorName>{author}</AuthorName>
        </AuthorDetails>
        <BlogContent>{content}</BlogContent>
      </BlogInfo>
    );
  };

  return (
    <div className="blog-container">
      {renderBlogPost()}
    </div>
  );
};

export default BlogPost;
