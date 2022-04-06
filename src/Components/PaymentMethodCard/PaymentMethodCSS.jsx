
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
  margin-top: 20px;
  margin-bottom: 10px;

`;

  // width: 56%;
    // margin-left: 7.5%;


    ///payment Card 

    export const PaymentCardContainer = styled.div`
      height: 489px;
      width: 716px;
      border: 1px solid #f3f5f7;
      box-sizing: border-box;

    .heading{
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.06em;
      color: #000000;
      display: flex;
      margin-top: 32px;
      margin-bottom: 32px;
      margin-left: 18px;
    `;


     export const PaymentCardParent = styled.div`
       height: 358px;
       background: #ffffff;
       border: 1px solid #d0d0d0;
       box-sizing: border-box;
       display: flex;
       margin-left: 18px;

       .patmentBox {
         display: flex;
         flex-direction: row;
         padding-left: 8px;
         justify-content: left;
         align-items: center;
         background: #d0d0d0;
         box-shadow: inset 0px -2px 0px #f1f1f1;
         border: none;
         font-weight: 600;
         font-size: 14px;
         line-height: 17px;

         letter-spacing: 0.06em;
         text-transform: uppercase;

         background: #d0d0d0;
         color: #707070;

         & img {
           width: 16px;
           height: 16px;
         }

         & button {
           background: black ; 
           color: white;
         }
       }
     `;
