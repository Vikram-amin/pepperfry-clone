import React from 'react'
import { Button, CardDetails, FlexP, PaymentOPtionContainer } from './PaymentMethodCSS';
import Radio from "@mui/material/Radio";
import { Link } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import { Flex } from '../CheckoutFooter/CheckoutFooterCSS';


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

        <div className="ImageDIv">
          <Radio />
          <img
            src="https://ii2.pepperfry.com/images/220-px-ru-paysvg.png"
            alt=""
          />
        </div>
      </FlexP>

      <CardDetails>
        <form>
          <label className="formlabel">Card Number</label>
          <input
            type="number"
            required
            placeholder="Enter Card Number"
            className="formName"
          />

          <FlexP>
            <div>
              <label>Expiry</label>
              <input
                type="text"
                required
                placeholder="MM/YY"
                className="inputexpiry"
              />
            </div>
            <div className="inputexpiry">
              <label>CVV</label>
              <input
                type="password"
                required
                placeholder="Enter CVV "
                className="inputexpiry"
              />
            </div>
          </FlexP>

          <label>Name On Card</label>
          <input
            type="text"
            placeholder="Enter Name as on Card "
            className="inputname"
          />

          <div className="checkbox">
            <Checkbox color="secondary" />
            Save this option securely for fastest payment
          </div>

          <Link to="/paymentdone">
            <Button type="submit"> PROCEED </Button>
          </Link>
        </form>
      </CardDetails>
    </PaymentOPtionContainer>
  );
}

export { Payment }