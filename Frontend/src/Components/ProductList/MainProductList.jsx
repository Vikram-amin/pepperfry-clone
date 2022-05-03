import React,{useEffect} from "react";
import "../../style/product.css"
import ProductCard from "./ProductCard";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Button, CircularProgress, modalUnstyledClasses } from "@mui/material"; 
import MetaData from "../layout/MetaData";
import { getProduct } from "../../Redux/Product/product_action";
import { useSelector, useDispatch } from "react-redux";
import { ProductCardList, ProductListContainer, ProductListHeading } from "./ProductListCSS";


const MainProductList =()=>{

const dispatch = useDispatch();
 const { loading, error, products, productsCount} = useSelector((state) => state.products)

    const [brand,setBrand] = React.useState("");
    const [prices,setPrice] = React.useState(500000);

 useEffect(() => {
    dispatch(getProduct());
 }, [dispatch]);

//  const getData = async() => {
//    const { data } = await axios.get("http://localhost:8000/api/v1/products");
//    console.log(data.product)
//  }

    return (
      <>
        <MetaData title="Prduct lists" />
        <Navbar />

        <ProductListHeading>
          <h1>Velvet Affairs</h1>
          <button className="btn-f">Furniture</button>
        </ProductListHeading>

        <br />

        <ProductListContainer>
          <span className="filter">
            <div className="sort">
              <h4>Sort by</h4>
              <br />
              <Button onClick={() => setBrand("")}>Clear</Button>
              <br />
              <input
                type="radio"
                name="money"
                value="50000"
                onChange={() => setPrice(50000)}
              />
              <label htmlFor="50,000">{"< 50,000"}</label>
              <br />
              <input
                type="radio"
                name="money"
                value="100000"
                onChange={() => setPrice(100000)}
              />
              <label htmlFor="1,00,000">{"< 1,00,000"}</label>
              <br />
              <input
                type="radio"
                name="money"
                value="150000"
                onChange={() => setPrice(150000)}
              />
              <label htmlFor="1,50,000">{"< 1,50,000"}</label>
              <br />
              <br />
              <h4>Brand</h4>
              <input
                type="radio"
                name="brand"
                value="CasaCraft"
                onChange={(e) => setBrand(e.target.value)}
              />
              <label htmlFor="CasaCraft">CasaCraft</label>
              <br />
              <input
                type="radio"
                name="brand"
                value="Woodsworth"
                onChange={(e) => setBrand(e.target.value)}
              />
              <label htmlFor="Woodsworth">Woodsworth</label>
              <br />
              <input
                type="radio"
                name="brand"
                value="Bohemiana"
                onChange={(e) => setBrand(e.target.value)}
              />
              <label htmlFor="Bohemiana">Bohemiana</label>
              <br />
              <input
                type="radio"
                name="brand"
                value="Stories"
                onChange={(e) => setBrand(e.target.value)}
              />
              <label htmlFor="Stories">Stories</label>
            </div>
          </span>

          <ProductCardList>
            { loading ? <CircularProgress /> : products &&
                products.map((items) => (
                  <ProductCard key={items.id} product={items} loading = { loading } />
                ))}
          </ProductCardList>
        </ProductListContainer>
        <Footer />

        {/* {products
              .filter((items) => {
                if ( items.brand.toLowerCase().includes(brand.toLocaleLowerCase()) && items.price < prices) {
                  return items;
                }
              })
              .map((items) => (
                <ProductCard key={items.id} product={items} />
              ))}  */}
      </>
    );
}

export default  MainProductList;
