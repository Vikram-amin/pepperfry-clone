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
          <p>{sofas.name}</p>
          <p>
            <Orange>12 Months' Warranty, 100% Genuine</Orange>
          </p>

          <div>
            <div>
              <CalendarMonthIcon /> Delivery By
            </div>
            <p>Tue, 19 Apr</p>
            <p>Charges FREE For Today</p>
          </div>

          <div>
            <div>
              <BsLayers /> Assembly
            </div>
            <p>Offered By Pepperfry</p>
            <p>Charges ₹ 449 </p>
          </div>

          <div>
            <Flex>
              <img src={safe} alt="" />
              <Orange> Full Furniture Protection </Orange>
            </Flex>
            <p>For Only ₹ 1,834</p>
            <p>Learn More?</p>
          </div>
        </CardMid>

        <CardRight>
          <Flex>
            <button>-</button>
            <div>1</div>
            <button>+</button>
          </Flex>
          <div> ₹ {sofas.price}</div>
          <Orange>₹ {sofas.price}</Orange>

          <div>+ Add</div>
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




