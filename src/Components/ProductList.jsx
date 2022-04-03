import React from "react";
import { ProductCard } from "./ProductCard";
import "../style/product.css"
import { Data } from "./Data";

export const ProductList =()=>{

    const [brand,setBrand] = React.useState("");

    console.log("hello");
    var data = [];
    for(var i=0;i<Data.length;i++){
        if(Data[i].company.toLowerCase().includes(brand.toLowerCase())){
            data.push(Data[i]);
        }
    }
    return(
    <>
    <div className="heading">
        <h2>Sofas</h2>
        <h5>Furnitures</h5>    
    </div>    
    <div className="product">
        <span className="filter">
            <h4>Sort by</h4>
            <input type="radio" name="money" value="High"/>
            <label htmlFor="Highest">Highest Priced First</label>
            <br />
            <input type="radio" name="money" value="Low"/>
            <label htmlFor="Lowest">Lowest Priced First</label>
            <h5>Brand</h5>
            <input type="radio" name="brand" value="CasaCraft" onChange={(e)=>setBrand(e.target.value)}/>
            <label htmlFor="CasaCraft">CasaCraft</label>
            <br />
            <input type="radio" name="brand" value="Duroflex" onChange={(e)=>setBrand(e.target.value)}/>
            <label htmlFor="Duroflex">Duroflex</label>
            <br />
            <input type="radio" name="brand" value="Wakefit" onChange={(e)=>setBrand(e.target.value)}/>
            <label htmlFor="Wakefit">Wakefit</label>
            <br />
            <input type="radio" name="brand" value="Febonic"  onChange={(e)=>setBrand(e.target.value)}/>
            <label htmlFor="Febonic">Febonic</label>
        </span>
        <span className="list">
        {   
            data.map((items)=>
            <>
            <ProductCard items = {items}/>
            </>
            )
        }
            
        </span>
    </div>
    </>
    )
}