
import styled from "styled-components";

export const PaymetMethodContainer = styled.div`
  width: 100%;
  padding: 17px;
  font-size: 14px;
  background: #f5f5f5;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  font-family: Manrope, sans-serif;
  display: flex;
  padding-left: 20px;
  padding-right: 15px;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;

`;

  // width: 56%;
    // margin-left: 7.5%;


    ///payment Card 

    export const PaymentCardContainer = styled.div`
      width: 100%;
      margin:auto;
      border: 1px solid #f3f5f7;
      box-sizing: border-box;
      font-family: Manrope,sans-serif;

    .heading{
      font-weight: bold;
      font-size: 15px;
      color: #121212;
      font-weight: 700;
      line-height: 18px;
      letter-spacing: 0.06em;
      display: flex;
      margin-top: 10px;
      margin-bottom: 32px;
      margin-left: 18px;
    `;


     export const PaymentCardParent = styled.div`
       width: 95%;
       margin: auto;
       margin-top: -20px;
       background: #ffffff;
       border: 1px solid lightgray;
       box-sizing: border-box;
       & img {
         width: 16px;
         height: 16px;
       }

       & div > button {
         color: red;
       }

       .patmentBox {
         border: 1px solid lightgray;
         width: 40%;
         margin-top: 1px;
         display: flex;
         flex-direction: row;
         padding: 15px;
         justify-content: left;
         align-items: center;
         background: #d0d0d0;
         font-size: 14px;
         line-height: 17px;
         text-transform: uppercase;
       }
     `;
