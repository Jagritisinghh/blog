import React, { useState, useEffect } from "react";
import { BlogListContainer } from "./styledComponents";
import BlogItem from "../BlogItem";
import AddBlogItem from "../AddBlogItem";
import { SubHeading2 } from "../Home/styledComponents";

const BlogList = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    getBlogsData();
  }, []);

  const getBlogsData = async () => {
    try {
      const response = await fetch('http://localhost:4000/posts');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      const formattedData = data.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        imageUrl: eachItem.image_url,
        avatarUrl: eachItem.avatar_url,
        author: eachItem.author,
        topic: eachItem.topic,
        date: eachItem.publication_date
      }));

      setBlogsData(formattedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDeleteBlog = (id) => {
    // Update the state to filter out the deleted blog post locally
    setBlogsData(prevBlogsData => prevBlogsData.filter(blog => blog.id !== id));
  };

  const handleAddBlog = (newBlog) => {
    setBlogsData((prevBlogsList) => [...prevBlogsList, newBlog]);
  };

  return (
    <BlogListContainer>
             <AddBlogItem  onAddBlog={handleAddBlog} />

             <SubHeading2>Trending Blogs</SubHeading2>


      {blogsData.map(item => (
        <BlogItem blogData={item} key={item.id} onDelete={handleDeleteBlog} />
      ))}

    </BlogListContainer>
  );
};

export default BlogList;
