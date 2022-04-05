import React from 'react'
import { CardContainer, CardIcon, CardLeft, CardMid, CardRight, Orange } from "./CartCSS";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { BsLayers } from "react-icons/bs";
import {Flex} from '../../Utils/Common'
import safe from '../../Images/safe.svg'
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const sofas = 
  {
    id: 1,
    name: "Esteban 3 Seater Half Leather Sofa in Grey Colour",
    img: "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg",
    madeBy: "CasaCraft by Pepperfry",
    price: "1,13,999",
    actual_price: "1,84,999",
  }



const CartCards = () => {
  return (
    <div>
      <CardContainer>
        <CardLeft>
          <img src={sofas.img} alt="" />
          <div> only 2 left </div>
        </CardLeft>

        <CardMid>
          <p className="name">{sofas.name}</p>
          <p>
            <Orange className="month">12 Months' Warranty, 100% Genuine</Orange>
          </p>

          <div className="spanItem">
            <div className="flexset">
              <CalendarMonthIcon className="calenderIcon" />
              <span> Delivery By</span>
            </div>
            <p>Tue, 19 Apr</p>
            <p>Charges FREE For Today</p>
          </div>
          <br />

          <div className="spanItem">
            <div className="flexset">
              <BsLayers className="calenderIcon" />
              <span>Assembly</span>
            </div>
            <p>Offered By Pepperfry</p>
            <p>Charges ₹ 449 </p>
          </div>

          <br />
          <div>
            <Flex>
              <img className="Safeitemsimg" src={safe} alt="" />
              <div className="Safeitems">
                <Orange> Full Furniture Protection </Orange>
                <p>For Only ₹ 1,834</p>
                <p>Learn More?</p>
              </div>
            </Flex>
          </div>
        </CardMid>

        <CardRight>
          <Flex>
            <button>-</button>
            <div className='quantity' >1</div>
            <button>+</button>
          </Flex>
          <div className='qprice'> ₹ {sofas.price}</div>
          <Orange>₹ {sofas.price}</Orange>

          <div className='add'>+ Add</div>
        </CardRight>

        <CardIcon>
          <span>
            <DeleteIcon />
          </span>

          <span>
            <FavoriteBorderIcon />
          </span>
        </CardIcon>
      </CardContainer>
    </div>
  );
}

export { CartCards }




