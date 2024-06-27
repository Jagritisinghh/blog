import styled from 'styled-components';

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 15px;

  @media screen and (min-width: 575px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-left:20px;
    padding-right:20px;
  }
`;

export const BlogInfo = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  @media screen and (min-width: 575px) {
    width: 660px;
  }
`;

export const BlogDetailsTitle = styled.h2`
  font-size: 25px;
  margin-top:20px;
  text-align: center;
  font-weight: bold;
  color:white;
  font-family: 'Roboto';

  @media screen and (min-width: 575px) {
    font-size: 28px;
    text-align: center;
  }
`;

export const AuthorDetails = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  padding-left:20px;
`;
export const AuthorPic = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const AuthorName = styled.p`
  color: #8e8e8e;
  font-size: 14px;
`;
export const BlogImage = styled.img`
  width: 90%;
  height: 180px;
  border-radius: 8px;
  object-fit: cover;

  @media screen and (min-width: 575px) {
    width: 660px;
    height: 300px;
  }
`;

export const BlogContent = styled.p`
  margin-top: 15px;
  font-family: 'Roboto';
  line-height: 24px;
  padding-left:20px;
    padding-right:20px;
  color: darkslategrey;
`;