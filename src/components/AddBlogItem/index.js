import React ,{useState} from 'react';
import {AddBlogContainer,SubmitButton,AddblogHeading,AddBlogForm,AddBlogInput,AddBlogcontent} from "./styledComponents"

import { v4 as uuidv4 } from 'uuid';
// import BlogItem from '../BlogItem'; // Assuming BlogItem component exists
// import './index.css';

const AddBlogItem = ({ onAddBlog }) => {
    const [imageUrl, setImageUrl] = useState('');
    const [topic, setTopic] = useState('');
    const [title, setTitle] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');

    const handleAddBlog = (event) => {
        event.preventDefault();
    
        const newBlog = {
          id: uuidv4(),
          imageUrl,
          topic,
          title,
          avatarUrl,
          author,
          date,
          content,
        };
    
        // Call the prop function to add the new blog to the parent component or context
        onAddBlog(newBlog);
    
        // Reset form fields after submission (optional)
        setImageUrl('');
        setTopic('');
        setTitle('');
        setAvatarUrl('');
        setAuthor('');
        setDate('');
        setContent('');
      };

 



  return (
    <AddBlogContainer>
        <AddblogHeading>Add Blogs</AddblogHeading>
        <AddBlogForm onSubmit={handleAddBlog}>
        <AddBlogInput
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image Url"
        />
        <AddBlogInput
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Topic"
        />
        <AddBlogInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <AddBlogInput
          type="text"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
          placeholder="Avatar Url"
        />
        <AddBlogInput
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <AddBlogInput
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="Date"
        />
        <AddBlogcontent
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="6"
          placeholder="Write your content here"
        />
        <SubmitButton type="submit">Add</SubmitButton>
      </AddBlogForm>
     

     
    </AddBlogContainer>
  );
};

export default AddBlogItem;
