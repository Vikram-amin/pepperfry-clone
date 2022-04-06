import React from 'react'
import { Button, CardDetails, FlexP, PaymentOPtionContainer } from './PaymentMethodCSS';
import Radio from "@mui/material/Radio";


const Payment = () => {
  return (
    <PaymentOPtionContainer>
      <FlexP>
        <div className="ImageDIv">
          <Radio />
          <img
            src="https://ii2.pepperfry.com/images/new-visa-logo.png"
            alt=""
          />
        </div>

        <div className="ImageDIv">
          <Radio />
          <img
            src="https://ii2.pepperfry.com/images/800-px-maestro-logosvg.png"
            alt=""
          />
        </div>
      </FlexP>

    <CardDetails>
      <input type="text" placeholder="Enter the card number" /> <br />
      <input type="text" placeholder="Enter cvv" /> <br />
      </CardDetails>

      <Button>PROCEED TO PAY</Button>

    </PaymentOPtionContainer>
  );
}

export { Payment }