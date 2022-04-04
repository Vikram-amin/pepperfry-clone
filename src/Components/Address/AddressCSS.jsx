import styled from "styled-components";

export const Left = styled.div`
  width: 66%;
  border: 1px solid black;
`;

export const Right = styled.div`
  width: 32%;
  border: 1px solid black;
`;

export const Form = styled.div`
  width: 85%;
  margin: auto;
  border: 1px solid black;
  line-height: 30px;

  .form {
    border: 1px solid black;
  }

  & input {
    width: 70%;
    height: 38px;
    margin-top:20px;
  }


  input[id="city"], input[id="state"] {
    width: 30%;
  }

`;
