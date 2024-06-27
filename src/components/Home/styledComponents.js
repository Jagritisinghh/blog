import styled from "styled-components";

 export const MainContainer=styled.div`
 width:100wv;
 height:100vh;
 padding:30px;
 display:flex;
 flex-direction:column;
 align-content:center;

`;
export const MainHeading=styled.h1`
color:white;
 font-size:60px;
 font-family:roboto;
 margin-bottom:30px;
 
 @media screen and (min-width:768px){
 font-size:180px;}`
 ;

export const SubHeading=styled.h3`
color: #0070c1;
font-size:20px;
 font-family:roboto;
 margin-bottom:30px;
 @media screen and (min-width:768px){
 font-size:50px;}`;

export const SubHeading2=styled(SubHeading)`
color:white;
font-size:30px`