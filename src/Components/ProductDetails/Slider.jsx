import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../style/slider.css"
   
var product = {
    img:["https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-3-seater-half-leather-sofa-in-grey-colour-by-casacraft-esteban-3-seater-half-leather-sofa-in-8akxht.jpg",
    "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-nqijeg.jpg",
    "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-qoh0xi.jpg",
    "https://ii1.pepperfry.com/media/catalog/product/e/s/800x400/esteban-half-leather-three-seater-sofa-in-grey-colour-by-casacraft-esteban-half-leather-three-seater-ra9orm.jpg"]
}

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
