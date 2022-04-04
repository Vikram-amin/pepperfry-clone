import React from 'react'
import { Checkbox } from "@mui/material";
import { useState } from "react";
import { Form, Left } from './AddressCSS';

const AddressInput = () => {

let initialValue = {
  name: "",
  phoneNo: "",
  pincode: "",
  address: "",
  city: "",
  state: "",
  country: "India",
};

const [formData, setFormData] = useState(initialValue);

 const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
 };

   const handleSubmit = () => {
       console.log("submit");
       console.log(formData);
 };

  return (
    <Form>
      <h2>Add New Shipping Address</h2>
      <Left>
      <div className="form">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder=" Vikram Amin "
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Mobile number</label>
            <input
              type="text"
              name="phoneNo"
              placeholder=" 9582020202"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Pincode</label>
            <input
              type="text"
              name="pincode"
              placeholder="40059"
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder=" House Number, Building Name, Society, Area, Road, Landmark"
              onChange={handleChange}
            />
          </div>

          <div>
            <span>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City"
                onChange={handleChange}
              />
            </span>

            <span>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State"
                onChange={handleChange}
              />
            </span>
          </div>

          <div>
            <input type="text" disabled value=" India" />
          </div>

          <div>
            <Checkbox />
            <span>Billing Address Is The Same As Shipping Address</span>
          </div>

          <div>
            <button onClick={handleSubmit}>SAVE & CONTINUE</button>
          </div>
        </div>
      </Left>
    </Form>
  );
}

export { AddressInput }