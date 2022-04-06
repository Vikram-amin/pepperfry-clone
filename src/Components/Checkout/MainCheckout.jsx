import { Checkbox } from '@mui/material';
import React from 'react'
import { CheckBoxDiv, Emi } from '../Cart/CartCSS';
import { CheckoutFooter } from '../CheckoutFooter/CheckoutFooter'
import { CheckoutNavbar } from '../CheckoutNavbar/CheckoutNavbar'
import { OrderSummery } from '../OrderSummeryCard/OrderSummery';
import { PaymentsCard } from '../PaymentMethodCard/PaymentCard';
import PaymentMethodCard from '../PaymentMethodCard/PaymentMethod';
import { Price } from '../PriceCard/Price';
import { BankOffer, ChekoutContainer, LeftDiv, PriceDiv, RightDiv } from './CheckoutCSS';
import { ShippingDetails } from './ShippingDetails';


const MainCheckout = () => {
  return (
    <div>
      <CheckoutNavbar />

      <ChekoutContainer>
        <LeftDiv>
          <OrderSummery />
          <ShippingDetails />
          <PaymentMethodCard />
          <PaymentsCard />
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

          <BankOffer>
              BANK OFFERS
          </BankOffer>

        </RightDiv>
      </ChekoutContainer>

      <CheckoutFooter />
    </div>
  );
}

export { MainCheckout }