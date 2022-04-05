import React from 'react'
import plus from '../../Images/plus.svg'
import { OrderContainer } from './OrderSummeryCSS';

const OrderSummery = () => {
  return (
    <>
      <OrderContainer>
        <div>ORDER SUMMARY</div>
        <div>
          <div>
            (2 items) <img src={plus} alt="plusIcon" />
          </div>
        </div>
      </OrderContainer>
    </>
  );
}

export { OrderSummery }