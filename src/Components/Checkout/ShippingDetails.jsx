import React from 'react'
import { BillingDetailContainer, BillingDetals, ShipingDetals } from './CheckoutCSS';

const address = {
    name:"vikram",
    address:"abcdefghijklm",
    state:"Karnataka",
    city:"Udupi",
    mobileNumber : "12354355656",


}

const ShippingDetails = () => {
  return (
    <BillingDetailContainer>
      <ShipingDetals>
        <div className="heading">SHIPPING DETAILS</div>
        <div className="detals">
          <div>{address.name.toUpperCase()}</div>
          <div>{address.address}</div>
          <div>
            {address.city} - {address.pincode}
          </div>
          <div>{address.state}</div>
          <div>M: {address.mobileNumber}</div>
        </div>
      </ShipingDetals>

      <BillingDetals>
        <div className="heading"> BILLING DETAILS</div>
        <div className="detals">
          <div>{address.name.toUpperCase()}</div>
          <div>{address.address}</div>
          <div>
            {address.city} - {address.pincode}
          </div>
          <div>{address.state}</div>
          <div>M: {address.mobileNumber}</div>
        </div>
      </BillingDetals>
    </BillingDetailContainer>
  );
}

export { ShippingDetails }