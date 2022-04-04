import styled from "styled-components";

export const Left = styled.div`
  width: 66%;
  border: 1px solid lightgrey;
`;

export const Right = styled.div`
  width: 32%;
  border: 1px solid lightgrey;
`;

export const Form = styled.div`
  width: 85%;
  margin: auto;
  line-height: 30px;

  & input {
    width: 66%;
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
    width: 31%;
    margin-left: 3%;
  }

  input[id="city"] {
    margin-left: 24%;
  }
  .name {
    margin-left: 16%;
  }

  .mb {
    margin-left: 8.5%;
  }
  .pin {
    margin-left: 14%;
  }
  .address {
    margin-left: 14%;
  }
  .country {
    margin-left: 24%;
  }
  .billing {
    margin-left: 22%;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  & label {
    margin-left: 3%;
    font-size: 14px;
    color: #848484;
    font-family: Manrope, sans-serif;
  }
`;

 export const Button = styled.div`
   width: 30%;
   height: 30px;
   padding: 10px;
   margin-left: 24%;
   text-align: center;
   background: #f16521;
   color: white;
   border-color: transparent;
   font-size: 15px;
   border: 1px solid #f16521;
   cursor: pointer;
   margin-bottom: 20px;
 `;
