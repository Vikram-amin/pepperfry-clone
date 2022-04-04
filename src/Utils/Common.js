import styled from "styled-components";

export const HR = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;


    // <h1>cart</h1>
    //   {sofas.map((el) => (
    //     <div
    //       style={{
    //         width: 440,
    //         margin: "auto",
    //         display: "flex",
    //         justifyContent: "flex-start",
    //         paddingBottom: 20,
    //         paddingTop: 10,
    //         borderBottom: "1px solid silver",
    //       }}
    //     >
    //       <div style={{ margin: "auto" }}>
    //         <img
    //           style={{
    //             width: 100,
    //             height: 100,
    //             marginLeft: -65,
    //             marginTop: -20,
    //           }}
    //           src={el.img}
    //           alt="cart img"
    //         />
    //       </div>
    //       <div style={{ marginLeft: -35 }}>
    //         <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
    //           <div
    //             style={{
    //               fontSize: 13,
    //               fontWeight: "bold",
    //               marginRight: 10,
    //               width: 290,
    //               height: "auto",
    //             }}
    //           >
    //             {el.item}
    //           </div>
    //         </Link>
    //         <div style={{ fontSize: 13, fontWeight: "bold" }}>{el.madeBy}</div>
    //         <div style={{ display: "flex", marginTop: 20 }}>
    //           <div>
    //             <p style={{ fontSize: 13, margin: 0, color: "grey" }}>
    //               Retail Price{" "}
    //             </p>{" "}
    //             <p
    //               style={{
    //                 fontSize: 13,
    //                 margin: 0,
    //                 fontWeight: "bold",
    //                 color: "grey",
    //               }}
    //             >
    //               Offer Price
    //             </p>{" "}
    //           </div>
    //           <div>
    //             <p style={{ fontSize: 13, margin: 0, marginLeft: 30 }}>
    //               {" "}
    //               ₹ <s>{el.actual_price}</s>
    //             </p>
    //             <p
    //               style={{
    //                 fontSize: 14,
    //                 margin: 0,
    //                 marginLeft: 30,
    //                 fontWeight: "bold",
    //               }}
    //             >
            
    //               ₹ {el.offer_price}
    //             </p>
    //           </div>
    //         </div>
    //         <div style={{ marginTop: 15 }}>
    //           <div>
    //             <u
    //               style={{
    //                 fontSize: 13,
    //                 margin: 0,
    //                 marginLeft: 100,
    //                 cursor: "pointer",
    //               }}
    //             >
    //               Move To Wishlist
    //             </u>{" "}
    //             <u
    //               style={{
    //                 fontSize: 13,
    //                 margin: 0,
    //                 marginLeft: 20,
    //                 cursor: "pointer",
    //               }}
    //             >
    //               Remove
    //             </u>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}