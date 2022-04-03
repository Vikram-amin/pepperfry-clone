import React from 'react'
import { Link } from "react-router-dom";

const sofas = [
  {
    id: 1,
    name: "Esteban 3 Seater Half Leather Sofa in Grey Colour",
    img: "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg",
    madeBy: "CasaCraft by Pepperfry",
    offer_price: "1,13,999",
    actual_price: "1,84,999",
  },
  {
    id: 2,
    name: "Amelia 2 Seater Sofa in Charcoal Grey Colour",
    img:  "https://ii1.pepperfry.com/media/catalog/product/a/m/800x400/amelia-2-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-2-seater-sofa-in-charcoal-grey-colo-mc0vev.jpg",
    
    madeBy: "CasaCraft by Pepperfry",
    offer_price: "1,13,999",
    actual_price: "1,84,999",
  },
];

const CartCard = () => {
  return (
    <>
    <h1>hi</h1>
    <h1>cart</h1>
      {sofas.map((el) => (
        <div
          style={{
            width: 440,
            margin: "auto",
            display: "flex",
            justifyContent: "flex-start",
            paddingBottom: 20,
            paddingTop: 10,
            borderBottom: "1px solid silver",
          }}
        >
          <div style={{ margin: "auto" }}>
            <img
              style={{
                width: 100,
                height: 100,
                marginLeft: -65,
                marginTop: -20,
              }}
              src={el.img}
              alt="cart img"
            />
          </div>
          <div style={{ marginLeft: -35 }}>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: "bold",
                  marginRight: 10,
                  width: 290,
                  height: "auto",
                }}
              >
                {el.item}
              </div>
            </Link>
            <div style={{ fontSize: 13, fontWeight: "bold" }}>{el.madeBy}</div>
            <div style={{ display: "flex", marginTop: 20 }}>
              <div>
                <p style={{ fontSize: 13, margin: 0, color: "grey" }}>
                  Retail Price{" "}
                </p>{" "}
                <p
                  style={{
                    fontSize: 13,
                    margin: 0,
                    fontWeight: "bold",
                    color: "grey",
                  }}
                >
                  Offer Price
                </p>{" "}
              </div>
              <div>
                <p style={{ fontSize: 13, margin: 0, marginLeft: 30 }}>
                  {" "}
                  ₹ <s>{el.actual_price}</s>
                </p>
                <p
                  style={{
                    fontSize: 14,
                    margin: 0,
                    marginLeft: 30,
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  ₹ {el.offer_price}
                </p>
              </div>
            </div>
            <div style={{ marginTop: 15 }}>
              <div>
                <u
                  style={{
                    fontSize: 13,
                    margin: 0,
                    marginLeft: 100,
                    cursor: "pointer",
                  }}
                >
                  Move To Wishlist
                </u>{" "}
                <u
                  style={{
                    fontSize: 13,
                    margin: 0,
                    marginLeft: 20,
                    cursor: "pointer",
                  }}
                >
                  Remove
                </u>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export { CartCard }