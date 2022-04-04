import styled from "styled-components";

export const CartPageWrapper = styled.div`
  margin-top: 100px;
  width: 85%;
  margin: auto;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  justify-content: space-between;
`;


export const CartLeft = styled.div`
  width: 66%;
  border: 1px solid black;
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
  color: Orange;
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

`
