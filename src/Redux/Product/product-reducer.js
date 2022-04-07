import * as actionTypes from './product-types';

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            name: "Esteban 3 Seater Half Leather Sofa in Grey Colour",
            img: ["https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-nqijeg.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-qoh0xi.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-ra9orm.jpg"],
            madeBy: "CasaCraft by Pepperfry",
            offer_price: "1,13,999",
            actual_price: "1,84,999",
            total_savings: "71,000 (38% Off)",
            price: 113999,
            brand: "CasaCraft"
        },
        {
            id: 2,
            name: "Amelia 2 Seater Sofa in Charcoal Grey Colour",
            img: ["https://ii1.pepperfry.com/media/catalog/product/a/m/800x400/amelia-2-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-2-seater-sofa-in-charcoal-grey-colo-mc0vev.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/a/m/800x400/amelia-two-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-two-seater-sofa-in-charcoal-grey--3g7ees.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/a/m/800x400/amelia-two-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-two-seater-sofa-in-charcoal-grey--qsy3nv.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/a/m/800x400/amelia-two-seater-sofa-in-charcoal-grey-colour-by-casacraft-amelia-two-seater-sofa-in-charcoal-grey--nifmkr.jpg"],
            madeBy: "CasaCraft by Pepperfry",
            offer_price: "28,999",
            actual_price: "46,999",
            total_savings: "18,000 (38% Off)",
            price: 28999,
            brand: "CasaCraft"
        },
        {
            id: 3,
            name: "Miranda 3 Seater Sofa in Navy Blue Colour",
            img: ["https://ii1.pepperfry.com/media/catalog/product/m/i/800x400/miranda-3-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-3-seater-sofa-in-navy-blue-colour-by-ee7lmu.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/m/i/800x400/miranda-three-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-three-seater-sofa-in-navy-blue-c-ecuf5p.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/m/i/800x400/miranda-three-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-three-seater-sofa-in-navy-blue-c-cjlzqj.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/m/i/800x400/miranda-three-seater-sofa-in-navy-blue-colour-by-woodsworth-miranda-three-seater-sofa-in-navy-blue-c-zd5fj8.jpg"],
            madeBy: "Woodsworth by Pepperfry",
            offer_price: "49,999",
            actual_price: "81,999",
            total_savings: "32,000 (39% Off)",
            price: 49999,
            brand: "Woodsworth"
        },
        {
            id: 4,
            name: "Regina 3 Seater Sofa in Mint green Colour",
            img: ["https://ii1.pepperfry.com/media/catalog/product/r/e/800x400/regina-3-seater-sofa-in-mint-green-colour---casacraft-by-pepperfry-regina-3-seater-sofa-in-mint-gree-pbaavz.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/r/e/800x400/regina-3-seater-sofa-in-mint-green-colour---casacraft-by-pepperfry-regina-3-seater-sofa-in-mint-gree-efy2xz.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/r/e/800x400/regina-3-seater-sofa-in-mint-green-colour---casacraft-by-pepperfry-regina-3-seater-sofa-in-mint-gree-ymibk7.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/r/e/800x400/regina-3-seater-sofa-in-mint-green-colour---casacraft-by-pepperfry-regina-3-seater-sofa-in-mint-gree-lx8jap.jpg"],
            madeBy: "CasaCraft by Pepperfry",
            offer_price: "53,999",
            actual_price: "85,999",
            total_savings: "32,000 (37% Off)",
            price: 53999,
            brand: "CasaCraft"
        },
        {
            id: 5,
            name: "Alfredo 2 Seater Sofa in Ash Grey Colour",
            img: ["https://ii1.pepperfry.com/media/catalog/product/a/l/800x400/alfredo-2-seater-sofa-in-ash-grey-colour-by-casacraft-alfredo-2-seater-sofa-in-ash-grey-colour-by-ca-mzyycc.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/a/l/800x400/alfredo-2-seater-sofa-in-ash-grey-colour-by-casacraft-alfredo-2-seater-sofa-in-ash-grey-colour-by-ca-pwhvkf.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/a/l/800x400/alfredo-two-seater-sofa-in-ash-grey-colour-by-casacraft-alfredo-two-seater-sofa-in-ash-grey-colour-b-fsj2xl.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/a/l/800x400/alfredo-two-seater-sofa-in-ash-grey-colour-by-casacraft-alfredo-two-seater-sofa-in-ash-grey-colour-b-ylyik8.jpg"],
            madeBy: "CasaCraft by Pepperfry",
            offer_price: "26,999",
            actual_price: "43,999",
            total_savings: "17,000 (39% Off)",
            price: 26999,
            brand: "CasaCraft"
        },
        {
            id: 6,
            name: "Regina 3 Seater Sofa in Rust Colour",
            img: ["https://ii1.pepperfry.com/media/catalog/product/r/e/800x400/regina-3-seater-sofa-in-rust-colour---casacraft-by-pepperfry-regina-3-seater-sofa-in-rust-colour---c-mh58yr.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/r/e/800x400/regina-3-seater-sofa-in-rust-colour---casacraft-by-pepperfry-regina-3-seater-sofa-in-rust-colour---c-dywmoe.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/r/e/800x400/regina-3-seater-sofa-in-rust-colour---casacraft-by-pepperfry-regina-3-seater-sofa-in-rust-colour---c-clloab.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/r/e/800x400/regina-3-seater-sofa-in-rust-colour---casacraft-by-pepperfry-regina-3-seater-sofa-in-rust-colour---c-x4hznb.jpg"],
            madeBy: "CasaCraft by Pepperfry",
            offer_price: "53,999",
            actual_price: "85,999",
            total_savings: "32,000 (37% Off)",
            price: 53999,
            brand: "CasaCraft"
        },
        {
            id: 7,
            name: "Kaylee 2 Seater Sofa in Velvet Blue Colour",
            img: ["https://ii1.pepperfry.com/media/catalog/product/k/a/800x400/kaylee-2-seater-sofa-in-velvet-blue-colour---casacraft-by-pepperfry-kaylee-2-seater-sofa-in-velvet-b-jot1m2.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/k/a/800x400/kaylee-2-seater-sofa-in-velvet-blue-colour---casacraft-by-pepperfry-kaylee-2-seater-sofa-in-velvet-b-pyjbkb.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/k/a/800x400/kaylee-2-seater-sofa-in-velvet-blue-colour---casacraft-by-pepperfry-kaylee-2-seater-sofa-in-velvet-b-umxirt.jpg",
                    "https://ii1.pepperfry.com/media/catalog/product/k/a/800x400/kaylee-2-seater-sofa-in-velvet-blue-colour---casacraft-by-pepperfry-kaylee-2-seater-sofa-in-velvet-b-fyrnew.jpg"],
            madeBy: "CasaCraft",
            offer_price: "47,999",
            actual_price: "85,999",
            total_savings: "38,000 (44% Off)",
            price: 47999,
            brand: "CasaCraft"
        }

    ],
    cart: [],
    currentItem: null,

}

const productReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            return{};
        case actionTypes.LOAD_CURRENT_ITEM:
            return{
                ...state,
                currentItem:action.payload,
            };
        default:
            return state;
    }
}

export default productReducer;