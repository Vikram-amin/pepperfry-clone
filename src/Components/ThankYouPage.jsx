import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

function ThankYouPage() {
  return (
    <Container>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQOgPDsimZKtc8WK8xbLmU9MHw-yvshFfbloDWMj400q2ZQ6f_ekYn_5_pGGK80sjg0-8&usqp=CAU"
        alt=""
      />
      <br /><br /><br /><br /><br />
      <Links id="btn" to="/">
        Continue Shopping
      </Links>
    </Container>
  );
}

export default ThankYouPage

const Container = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 50px;
  position: relative;

  & img {
    width: 100vh 
  }
`;

const Links = styled(Link)`
  padding: 10px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  top: 330px;
  left: 450px;
  background-color: orangered;
  color: black;
  border-radius: 5px;
  :hover{
    border: 0.1px solid orangered;
    background-color: orangered;
    border-radius: 5px;
    color: white;
  }
`;