import React from 'react'
import { HomeContainer, RectangularBlock, Shop, Eyeing } from './HeroCSS'
import ImageSlider from '../ImageSlider/ImageSlider'
import { SliderData } from '../ImageSlider/SliderData';

const Hero = () => {
  return (
    <>
        <HomeContainer>
            <div className="belowNavbar">
                <ImageSlider slides={SliderData}/>
                <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/New-Beginning_RHS.gif" alt={"SideImage"} className="sideImage"/>
            </div>
            <RectangularBlock><img src="https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner_05042022.jpg" alt={"T&C"}/></RectangularBlock>
            <h1>Shop By Room</h1>
            <Shop>
                <div>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_1_2x_31032022.jpg" alt={"Living"} />
                    <div className="title">Living Room</div>
                </div>
                <div>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_2_2x_31032022.jpg" alt={"WFH"} />
                    <div className="title">Work From Home</div>
                </div>
                <div>
                    <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_3_2x_31032022.jpg" alt={"Bedroom"} />
                    <div className="title">Bedroom</div>
                </div>
                <div>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Rooms_Section_Web_4_2x_31032022.jpg" alt={"KidsRoom"} />
                    <div className="title">Kids Room</div>
                </div>
            </Shop>
            <h1>What's Everyone Eyeing</h1>
            <Eyeing>
                <div>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_1_2x_31032022.jpg" alt={"Wardrobes"} className="sideOne"/>
                </div>
                <div>
                    <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_2_2x_31032022.jpg" alt={"WallArt"} className="sideTwo"/>
                </div>
                <div className="quadra">
                    <div>
                        <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_3_2x_31032022.jpg" alt={"ShoeRack"} className="quadraImage"/> 
                    </div>
                    <div>
                        <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_4_2x_31032022.jpg" alt={"KingSizeBed"} className="quadraImage"/> 
                    </div>
                    <div>
                        <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_5_2x_31032022.jpg" alt={"SeaterSofa"} className="quadraImage"/>
                    </div>
                    <div>
                        <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Trend_Section_WEB_6_2x_31032022.jpg" alt={"HangingLights"} className="quadraImage"/>
                    </div>
                </div>
            </Eyeing>
            <h1>Your Pocket-Friendly Shoppe</h1>
            {/* <Shoppee>
                <div>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_1_2x_31032022.jpg" alt={""} />
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <img src="https://ii3.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_2_2x_31032022.jpg" alt={""} />
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <img src="https://ii1.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_3_2x_31032022.jpg" alt={""} />
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <img src="https://ii2.pepperfry.com/media/wysiwyg/banners/Homepage_Budget_Block_WEB_4_2x_31032022.jpg" alt={""} />
                    <div></div>
                    <div></div>
                </div>
            </Shoppee> */}

        </HomeContainer>
    </>
  )
}

export default Hero