
import { Checkbox } from '@mui/material';
import React from 'react'
import { OrderSummery } from '../OrderSummeryCard/OrderSummery';

import { Price } from '../PriceCard/Price';
import { CheckBoxDiv, Emi } from '../PriceCard/PriceCSS';
import { AdressContainer,  LeftDiv,  PriceDiv,  RightDiv } from './AddressCSS';
import {AddressInput} from './AddressInput'

const Address = () => {
  return (
    <AdressContainer>
      <LeftDiv>
        {/* <OrderSummery /> */}
        <AddressInput />
      </LeftDiv>

      <RightDiv>
        <PriceDiv>
          <Price />
        </PriceDiv>

        <Emi>
          <p>
            No Cost EMI Available starting <span>₹ 2,316/month.</span> EMI
            Starting <span> ₹ 655/month </span>
          </p>
        </Emi>

        <CheckBoxDiv className="chekboxAddress">
          <Checkbox /> Contribute Rs.99 For COVID Relief Through GiveIndia.
        </CheckBoxDiv>
      </RightDiv>
    </AdressContainer>
  );
}

export { Address }