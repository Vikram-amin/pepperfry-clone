import styled from "styled-components";

export const CartPageWrapper = styled.div`
  margin-top: 100px;
  width: 85%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export const CartLeft = styled.div`
  width: 66%;
`;


export const CartRight = styled.div`
  width: 32%;
  border: 1px solid black;
`;

export const CartCountHeading = styled.div`
  margin-top: 100px;
`;

export const PriceContainer = styled.div`
border : 1px solid black;
  box-shadow: -1px -1px 0px #e7e7e7, 1px 1px 0px #e7e7e7;
`;

export const Hr = styled.div`
  width: 94%;
  height: 2px;
  border: 1px solid gary;
  background-color: gray;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px ;
`;

export const CartHeader = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  height: 42px;
  border: 1px solid black;
`;

export const PriceWraper = styled.div`
  padding: 22px;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  padding-top: 10px;
  letter-spacing: 0.06em;

  .cardDisplay {
    display: flex;
    justify-content: space-between;
    width: inherit;
    padding: 2px;
    margin-top: 8px;
    padding-right: 6px;
  }


`;

export const Green = styled.div`
  color: green;
`;

export const Blue = styled.span`
color:blue;
`

export const Orange = styled.span`
  color:  #f16521;;
`;


export const CartItem = styled.div`
`

export const TotalPrice = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;

  .total {
    font-size: 14px;
    color: #4a4a4a;
    line-height: 15px;
    font-weight: 600;
  }

  .totalPrice {
    font-size: 14px;
    color: #4a4a4a;
    line-height: 15px;
    font-weight: 600;
    text-align: right;
  }

  .tax {
    color: #848484;
    font-weight: 600;
    padding-top:10px;
  }
`;

export const Emi = styled.div`
  font-size: 10px;
  color: #4a4a4a;
  line-height: 15px;
  font-weight: 500;
  cursor: pointer;

  & p {
    padding: 5px 15px 5px 20px;
  }

  & span {
    text-decoration: underline;
  }
`;



export const CheckBoxDiv = styled.div`
& Grid {
  color:red;
}

`

// Cart card 

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  padding-bottom:30px;
  border: 1px solid lightgray;
`;


export const CardLeft = styled.div`
  width: 17%;
  margin-top: 30px;

  & img {
    width: 90px;
    height: 100px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  & div {
    width: 50%;
    margin: auto;
    margin-top: 20px;
    font-size: 11px;
    color: #454545;
    padding: 1px 10px;
    border: 1px solid #979797;
    border-radius: 20px;
    text-align: center;
    letter-spacing: 0;
    font-weight: 600;
  }
`;

export const CardMid = styled.div`
  width: 40%;
  font-weight: 500;
  font-size: 13px;
  margin-top: 16px;

  .name {
    color: #121212;
  }

  .month {
    color: #f16521;
  }

  .flexset {
    position: relative;
  }

  .flexset span {
    position: absolute;
    top: 5px;
    left: 40px;
  }

  .spanItem p {
    padding-left: 40px;
    margin: 0;
    margin-top: -10px;
    padding-top: 12px;
  }

  .Safeitems {
    margin-left: 20px;
  }

  .Safeitems p {
    margin: 0px;
    padding: 0px;
  }

  .Safeitemsimg {
    margin-left: -10px;
  }

  .calenderIcon {
    width: 20px;
  }
`;


export const CardRight = styled.div`
  width: 15%;
  color: #848484;
  margin-left: 80px;
  margin-top: 30px;

  & button {
    border: none;
    background-color: transparent;
    width: 20px;
    font-size: 15px;
  }

  .quantity {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    text-align: center;
    padding: 5px;
    border-radius: 3px;
  }

  .qprice {
    padding-top: 20px;
    text-decoration: line-through;
    margin-bottom: 5px;
  }

  .add {
    padding-top: 140px;
    font-size: 15px;
  }
`;

export const CardIcon = styled.div`
  width: 20%;
  display: flex;
  justify-content: right;
  align-items: right;
  padding-right: 10px;
  margin-top: 30px;

  & span {
    padding-right: 8px;
  }
`;