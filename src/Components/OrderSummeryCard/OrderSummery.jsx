import React,{useState,useEffect} from 'react'
import { connect, useSelector } from 'react-redux';
import plus from '../../Images/plus.svg'
import { OrderContainer } from './OrderSummeryCSS';

const OrderSummery = ({cart}) => {
    const [totalItem, setTotalItem] = useState(0);

      useEffect(() => {
        let items = 0;


        cart.forEach((item) => {
          // console.log(item.qty,"hjfghf")
          items += item.qty;

        });

        setTotalItem(items);

      }, [totalItem,setTotalItem]);




  return (
    <>
      <OrderContainer>
        <div>ORDER SUMMARY</div>
        <div>
          <div>
            ({totalItem} items) <img src={plus} alt="plusIcon" />
          </div>
        </div>
      </OrderContainer>
    </>
  );
}



const mapStateToProps = (state) => {
  return {
    cart: state.product.cart,
  };
};

export default connect(mapStateToProps)(OrderSummery);
