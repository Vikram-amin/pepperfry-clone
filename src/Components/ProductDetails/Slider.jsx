import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../style/slider.css"

var productData = JSON.parse(localStorage.getItem("data"));
var product = productData[0];   


export const Slider=()=>{
    return(
        <>
            <Carousel>
                <div>
                    <img src={product.img[0]} alt="" />
                </div>
                <div>
                    <img src={product.img[1]} alt="" />
                </div>
                <div>
                    <img src={product.img[2]} alt="" />
                </div>
                <div>
                    <img src={product.img[3]} alt="" />
                </div>
            </Carousel>
        </>
    )
}
