import styled from "styled-components";

export const ItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin: 15px;

  @media screen and (min-width: 575px) {
    flex-direction: row;
    width: 660px;
    height: 170px;
  }
`;



 

 
  
export const ItemImage=styled.img `
    width: 100%;
    border: 1px solid transparent;
    border-radius: 5px;
    height: 170px;
  
  
  @media screen and (min-width: 575px) {
  
      width: 350px;
      border: 1px solid transparent;
      border-radius: 5px;
      margin-right: 15px;
}
    
  `; 
  
  
  export const ItemInfo=styled.p`
    font-family: 'Roboto';
    width: 100%;
  
  
  @media screen and (min-width: 575px) {
    
      width: 60%;
    
}`;
  
export const ItemTopic=styled.p`
    color: #8e8e8e;
    margin-bottom:10px;
    font-size: 14px;
  `;
  
  export const ItemTitle=styled.p`
    font-size: 18px;
    color: white;
    margin-bottom:10px;
  `;
  
  export const AuthorInfo=styled.p`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom:10px;
    margin-top:10px;
  `;
  export const  Avatar =styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
  `;
  export const AuthorName=styled.p`
    color: #8e8e8e;
    font-size: 14px;
    
  `;