
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


    export const PaymentDiv = styled.div`
      display: flex;
      width: 95%;
      margin: auto;
      box-sizing: border-box;
      font-family: Manrope, sans-serif;
      margin: auto;
      margin-top: -20px;
      background: #ffffff;
      border: 1px solid lightgray;
    `;

  

     export const PaymentCardParent = styled.div`
       width: 35%;
       margin: auto;
       margin-top: 10px;
       margin-bottom: 10px;
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
         width: 100%;
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


     // Payment option
export const FlexP = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;


export const PaymentOPtionContainer = styled.div`
  border: 1px solid lightgray;
  width: 60%;
  

  .ImageDIv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    border: 1px solid lightgray;
    padding: 10px;
    margin-top:60px;
  }
`;

export const CardDetails = styled.div`
  margin: 50px;

  .checkbox {
    margin-top: 10px;
    margin-left: -14px;
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #707070;
  }

  .inputname {
    width: 260px;
    height: 44px;
    border: 1px solid #707070;
    margin-top: 16px;
    padding-left: 15px;
    background-color: #f3f5f7;
    font-family: "Fira Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.06em;
    border-radius: 4px;
  }

  .inputexpiry {
    max-width: 120px;
    height: 34px;
    padding-left: 15px;
    background: #f3f5f7;
    outline: none;
    border: 1px solid #f3f5f7;
  }
`;

export const Button = styled.button`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 16px;
  padding: 10px 5rem;
  margin-left: 15%;
  border: none;
  color: white;
  background-color: #f16521;
  text-align: center;
`;