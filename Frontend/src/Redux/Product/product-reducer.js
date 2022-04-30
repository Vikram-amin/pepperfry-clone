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
            offer_price: 113999,
            actual_price: 184999,
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
            offer_price: 28999,
            actual_price: 46999,
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
            offer_price: 49999,
            actual_price: 81999,
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
            offer_price: 53999,
            actual_price: 85999,
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
            actual_price: 43999,
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
            actual_price: 85999,
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
            actual_price: 85999,
            total_savings: "38,000 (44% Off)",
            price: 47999,
            brand: "CasaCraft"
        },
        {
          id: 11,
          name: "Orpha Metal Settee In Grey Colour",
          img: ["https://ii1.pepperfry.com/media/catalog/product/o/r/1100x1210/orpha-metal-settee-in-grey-colour---bohemiana-by-pepperfry-orpha-metal-settee-in-grey-colour---bohem-mejtxw.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/o/r/1100x1210/orpha-metal-settee-in-grey-colour---bohemiana-by-pepperfry-orpha-metal-settee-in-grey-colour---bohem-ffjad4.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/o/r/1100x1210/orpha-metal-settee-in-grey-colour---bohemiana-by-pepperfry-orpha-metal-settee-in-grey-colour---bohem-0ddwlc.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/o/r/1100x1210/orpha-metal-settee-in-grey-colour---bohemiana-by-pepperfry-orpha-metal-settee-in-grey-colour---bohem-tqsrtm.jpg"],
          madeBy: "Bohemiana by Pepperfry",
          offer_price: "14,999",
          actual_price: "32,999",
          total_savings: "55% Off",
          price: 14999,
          brand: "Bohemiana"
      },
      {
          id: 12,
          name: "Rovel Solid Wood Settee In Brown Colour",
          img: ["https://ii1.pepperfry.com/media/catalog/product/r/o/1100x1210/rovel-solid-wood-settee-in-brown-colour---bohemiana-by-pepperfry-rovel-solid-wood-settee-in-brown-co-stqtzh.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/r/o/1100x1210/rovel-solid-wood-settee-in-brown-colour---bohemiana-by-pepperfry-rovel-solid-wood-settee-in-brown-co-xyq6bc.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/r/o/1100x1210/rovel-solid-wood-settee-in-brown-colour---bohemiana-by-pepperfry-rovel-solid-wood-settee-in-brown-co-ehdmlo.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/r/o/1100x1210/rovel-solid-wood-settee-in-brown-colour---bohemiana-by-pepperfry-rovel-solid-wood-settee-in-brown-co-cmwopi.jpg"],
          madeBy: "Bohemiana by Pepperfry",
          offer_price: "17,499",
          actual_price: "34,999",
          total_savings: "50% Off",
          price: 17499,
          brand: "Bohemiana"
      },
      {
          id: 13,
          name: "Ubu Solid Wood Settee in Blue Distress Finish",
          img: ["https://ii1.pepperfry.com/media/catalog/product/u/b/1100x1210/ubu-solid-wood-settee-in-blue-distress-finish-by-bohemiana-ubu-solid-wood-settee-in-blue-distress-fi-fxjkco.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/u/b/1100x1210/ubu-solid-wood-settee-in-blue-distress-finish-by-bohemiana-ubu-solid-wood-settee-in-blue-distress-fi-cprb7k.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/a/h/1100x1210/ahafo-settee-in-blue-distress-finish-by-bohemiana-ahafo-settee-in-blue-distress-finish-by-bohemiana-bp8iys.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/a/h/1100x1210/ahafo-settee-in-blue-distress-finish-by-bohemiana-ahafo-settee-in-blue-distress-finish-by-bohemiana-ydmbqk.jpg"],
          madeBy: "Bohemiana by Pepperfry",
          offer_price: "29,999",
          actual_price: "34,999 ",
          total_savings: "14% Off",
          price: 29999,
          brand: "Bohemiana"
      },
      {
          id: 14,
          name: "Utah Settee in Colonial Maple Finish",
          img: ["https://ii1.pepperfry.com/media/catalog/product/u/t/1100x1210/utah-bench-in-colonial-maple-color-finish-by-stories-utah-bench-in-colonial-maple-color-finish-by-st-ktahjs.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/u/t/1100x1210/utah-bench-in-colonial-maple-color-finish-by-stories-utah-bench-in-colonial-maple-color-finish-by-st-cdeuwr.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/u/t/1100x1210/utah-bench-in-colonial-maple-color-finish-by-stories-utah-bench-in-colonial-maple-color-finish-by-st-e9ik5y.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/u/t/1100x1210/utah-bench-in-colonial-maple-color-finish-by-stories-utah-bench-in-colonial-maple-color-finish-by-st-zwut7n.jpg"],
          madeBy: "by Stories",
          offer_price: "23,599",
          actual_price: "33,040",
          total_savings: " 29% Off",
          price: 23599,
          brand: "Stories"
      },
      {
          id: 15,
          name: "Rafles Settee in Brown Colour",
          img: ["https://ii1.pepperfry.com/media/catalog/product/r/a/1100x1210/rafles-settee-in-brown-colour-by-stories-rafles-settee-in-brown-colour-by-stories-zfjims.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/r/a/1100x1210/rafles-two-seater-bench-in-brown-colour-by-stories-rafles-two-seater-bench-in-brown-colour-by-storie-s6dy91.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/r/a/1100x1210/rafles-two-seater-bench-in-brown-colour-by-stories-rafles-two-seater-bench-in-brown-colour-by-storie-6zqypw.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/r/a/1100x1210/rafles-two-seater-bench-in-brown-colour-by-stories-rafles-two-seater-bench-in-brown-colour-by-storie-arnvva.jpg"],
          madeBy: "by Stories",
          offer_price: "16,900",
          actual_price: "21,900",
          total_savings: "23% Off",
          price: 16900,
          brand: "Stories"
      },
      {
          id: 21,
          name: "Marvel Ergonomic Chair in Black Colour",
          img: ["https://ii1.pepperfry.com/media/catalog/product/m/a/1100x1210/marvel-ergonomic-chair-in-black-colour-by-durian-marvel-ergonomic-chair-in-black-colour-by-durian-0a4que.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/m/a/1100x1210/marvel-ergonomic-chair-in-black-colour-by-durian-marvel-ergonomic-chair-in-black-colour-by-durian-c0uh6r.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/m/a/1100x1210/marvel-ergonomic-chair-in-black-colour-by-durian-marvel-ergonomic-chair-in-black-colour-by-durian-33016z.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/m/a/1100x1210/marvel-marvel-anbckh.jpg"],
          madeBy: "by Durian",
          offer_price: "9,425",
          actual_price: "14,500",
          total_savings: "35% Off",
          price: 9425,
          brand: "Durian"
      },
      {
          id: 22,
          name: "Elegant Modern Gaming Chair In Red Colour",
          img: ["https://ii1.pepperfry.com/media/catalog/product/e/l/1100x1210/elegant-modern-gaming-chair-in-red-by-adiko-systems-elegant-modern-gaming-chair-in-red-by-adiko-syst-3g3uvv.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/a/d/1100x1210/adiko-elegant-modern-gaming-chair-in-redby-adiko-systems-adiko-elegant-modern-gaming-chair-in-redby--kucjpt.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/a/d/1100x1210/adiko-elegant-modern-gaming-chair-in-redby-adiko-systems-adiko-elegant-modern-gaming-chair-in-redby--q0q0zi.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/e/l/1100x1210/elegant-modern-gaming-chair-in-red-by-systems-elegant-modern-gaming-chair-in-red-by-systems-n0v17s.jpg"],
          madeBy: "by Adiko Systems",
          offer_price: "14,299",
          actual_price: "16,999",
          total_savings: "16% Off",
          price: 14299,
          brand: "Adiko Systems"
      },
      {
          id: 23,
          name: "MultiColour Patch Iconic Chair",
          img: ["https://ii1.pepperfry.com/media/catalog/product/m/u/1100x1210/multicolour-patch-iconic-chair-by-star-india-multicolour-patch-iconic-chair-by-star-india-iwybi2.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/p/a/1100x1210/patched-fabric-chari-by-star-india-patched-fabric-chari-by-star-india-banq9y.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/p/a/1100x1210/patched-fabric-chari-by-star-india-patched-fabric-chari-by-star-india-a75fw7.jpg",
                  "https://ii1.pepperfry.com/media/catalog/product/p/a/1100x1210/patched-fabric-chari-by-star-india-patched-fabric-chari-by-star-india-qrgjhk.jpg"],
          madeBy: "by Star India",
          offer_price: "7,999",
          actual_price: "10,999",
          total_savings: "27% Off",
          price: 7999,
          brand: "Star India"
      },

    ],

    cart : [],
    currentItem: null,
    

}

const productReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
      case actionTypes.ADD_TO_CART:
        const item = state.products.find(
          (product) => product.id === action.payload.id
        );

        const inCart = state.cart.find((item) =>
          item.id === action.payload.id ? true : false
        );

        return {
          ...state,
          cart: inCart
            ? state.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : [...state.cart, { ...item, qty: 1 }],
        };

      case actionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };

      case actionTypes.ADJUST_QUT:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: +action.payload.qty }
              : item
          ),
        };

      case actionTypes.INCREMENT:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };

      case actionTypes.DECREMENT:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };

      case actionTypes.LOAD_CURRENT_ITEM:
        return {
          ...state,
          currentItem: action.payload,
        };
      default:
        return state;
    }
}

export default productReducer;

        // case actionTypes.LOAD_CURRENT_ITEM:
        //     return{
        //         ...state,
        //         currentItem:action.payload,
        //     };