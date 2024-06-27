import styled from "styled-components";
export const AddBlogContainer = styled.div`
  color: #fff; /* White text */
  padding: 20px;
  border-radius: 8px;
  width:100wv ;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const AddblogHeading = styled.h2`
  font-size: 24px;
  font-family:roboto;
  margin-bottom: 15px;
`;

export const AddBlogForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  width:100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const AddBlogInput = styled.input`
  width: 95%;
  padding: 10px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: none;
  border:1px solid #fff;
  color: #fff;
`;

export const AddBlogcontent = styled.textarea`
  width: 95%;
  padding: 10px;
  border: 1px solid #444;
  border-radius: 4px;
    border: 1px solid #444;

  background-color: none;
  color: #fff;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4CAF50; /* Green */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
  }
`;
