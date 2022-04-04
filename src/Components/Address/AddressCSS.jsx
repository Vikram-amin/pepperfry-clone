import styled from "styled-components";



 export const AdressContainer = styled.div`
   width: 85%;
   margin: auto;
   display: flex;
   flex-direction: row;
   justify-content: space-between;

   .chekboxAddress {
     font-size: 12px;
     padding: 2px;
     color: #969696;
     font-weight: 500;
   }
 `;

export const LeftDiv = styled.div`
  width: 66%;
  border: 1px solid lightgrey;
`;


export const RightDiv = styled.div`
  width: 32%;

`;

export const PriceDiv = styled.div`
  border: 1px solid lightgray;
`;

export const Form = styled.div`
  width: 85%;
  margin: auto;
  line-height: 30px;

  & input {
    width: 78%;
    height: 38px;
    margin-top: 20px;
  }
  & h2 {
    font-size: 15px;
    color: #121212;
    font-weight: 700;
    line-height: 1.6;
    margin-top: 20px;
    margin-left: 3%;
  }

  input[id="city"],
  input[id="state"] {
    width: 37%;
    margin-left: 3%;
  }

  input[id="city"] {
    margin-left: 18%;
  }

  .name {
    margin-left: 17%;
  }

  .mb {
    margin-left: 8.5%;
  }
  .pin {
    margin-left: 15%;
  }
  .address {
    margin-left: 15%;
  }
  .country {
    margin-left: 18%;
  }

  .billing {
    margin-left: 16%;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  & label {
    margin-left: -30px;
    font-size: 14px;
    color: #848484;
    font-family: Manrope, sans-serif;
  }
`;

 export const Button = styled.div`
   width: 30%;
   height: 30px;
   padding: 10px;
   margin-left: 18%;
   text-align: center;
   background: #f16521;
   color: white;
   border-color: transparent;
   font-size: 15px;
   border: 1px solid #f16521;
   cursor: pointer;
   margin-bottom: 20px;
 `;


