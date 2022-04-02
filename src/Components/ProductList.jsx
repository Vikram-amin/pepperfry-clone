import React from "react";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";



const data =[ 
    {
        src: "https://ii2.pepperfry.com/media/catalog/product/a/n/494x544/anne-solid-wood-dining-chair-in-rustic-teak-finish---by-amberville-anne-solid-wood-dining-chair-in-r-zlbwrc.jpg",
        title: "Anne Solid Wood Dining Chair In Rustic Teak Finish",
        company: "Amberville",
        price: "17,499"
    },
    {
        src: "https://ii3.pepperfry.com/media/catalog/product/c/h/494x544/charm-velvet-arm-chair-in-teal-colour-by-hometown-charm-velvet-arm-chair-in-teal-colour-by-hometown-hmoceq.jpg",
        title: "CHarm Wing Chair",
        company: "HomeTown",
        price: "28,405"
    },
    {
        src: "https://ii2.pepperfry.com/media/catalog/product/c/a/494x544/capella-armchair-capella-armchair-kxpkxa.jpg",
        title: "Capella Armchair in Brown Color",
        company: "Orix",
        price: "1,43,606"
    },
    {
        src: "https://ii3.pepperfry.com/media/catalog/product/t/h/494x544/the-kangaroo-chair---footstool-in-walnut-finish-by-home-canvas-the-kangaroo-chair---footstool-in-wal-d3hygh.jpg",
        title: "The Kangaroo Chair and Footstool",
        company: "Home Canvas",
        price: "37,995"
    },
    {
        src: "https://ii1.pepperfry.com/media/catalog/product/t/h/494x544/the-kangaroo-chair-in-walnut-finish-by-home-canvas-the-kangaroo-chair-in-walnut-finish-by-home-canva-ecryzk.jpg",
        title: "The Kangaroo Chair and Footstool",
        company: "Home Canvas",
        price: "29,700"
    },
    {
        src: "https://ii3.pepperfry.com/media/catalog/product/g/u/494x544/guest-chair-in-maroon-colour-by-efc-guest-chair-in-maroon-colour-by-efc-z1p5ip.jpg",
        title: "Arm Chair in Maroon Color",
        company: "EFC",
        price: "4,750"
    }
]

const Products = styled.div`
    display: grid;
    grid-template-column:repeat(3,33%);
`;

export const ProductList =()=>{
    return(
        <>
        {   
            data.map((items)=>
            <>
            <Products><ProductCard items = {items}/></Products>
            </>
            )
        }
        </>
    )
}