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
  margin-top: 30px;
  position: relative;

  & img {
    object-fit: contain;
  }
`;

const Links = styled(Link)`
  padding: 15px;
  border: 1px solid black;
  font-size: 18px;
  font-weight: 600;
  position: absolute;
  top: 350px;
  left: 470px;
  background-color: antiquewhite;
  color: black;
`;