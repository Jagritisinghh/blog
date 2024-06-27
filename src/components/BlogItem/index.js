import {Link} from "react-router-dom"
import {ItemContainer,ItemImage,AuthorInfo,Avatar,AuthorName,ItemInfo,ItemTopic,ItemTitle} from "./styledComponents"
import "./index.css"
import { AddblogButtton } from "../Header/styledComponents"

const BlogItem = ({ blogData, onDelete }) => {
  const {id, imageUrl, topic, title, avatarUrl, author,date} = blogData


  const handleDelete = () => {
    onDelete(id);
  };

  return (
      <ItemContainer>
          <Link   to={`/blogs/${id}`} className="item-link">
        <ItemImage src={imageUrl} alt={`item${id}`} />
        
      </Link>
        <ItemInfo>
        <AuthorInfo>
            <Avatar src={avatarUrl} alt={`avatar${id}`} />
            <AuthorName>{author}</AuthorName>
          </AuthorInfo>
          <ItemTopic>{topic}</ItemTopic>
          <ItemTopic>Publication date:{date}</ItemTopic>

          <ItemTitle>{title}</ItemTitle>
          <AddblogButtton  onClick={handleDelete}>Delete</AddblogButtton>
        </ItemInfo>
      </ItemContainer>
  )
}

export default BlogItem
