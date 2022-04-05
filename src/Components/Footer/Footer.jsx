import React from 'react';
import {FooterBox, FooterFirstHalf, UsefulLinks, Partners, NeedHelp, DownloadApp, FooterSecondHalf, PopularCategories, PopularBrands, Cities, FooterThirdHalf, Left} from './FooterCSS';
import Apple from '../../Images/FooterImages/apple.png';
import GooglePlay from '../../Images/FooterImages/googleplay.png';
import Visa from '../../Images/FooterImages/footer-visacard-logo.png';
import MasterCard from '../../Images/FooterImages/footer-mastercard-logo.png'
import MaestroCard from '../../Images/FooterImages/footer-maestrocard-logo.png'
import AmericanExpress from '../../Images/FooterImages/footer-amexcard-logo.png'
import RuPay from '../../Images/FooterImages/footer-rupaycard-logo.png'
import DinnersCard from '../../Images/FooterImages/footer-dinnerscard-logo.png'
import Wallet from '../../Images/FooterImages/footer-wallet-logo.png'
import InternetBanking from '../../Images/FooterImages/footer-internet-banking-logo.png'


const Footer = () => {
  return (
    <>
      <FooterBox>
        <FooterFirstHalf>
          <UsefulLinks>
            <ul>
              <li className="footer--headings">Useful Links</li>
              <li>About Us</li>
              <li>Our Blog</li>
              <li>Careers</li>
              <li>Corporate Governance</li>
              <li>Pepperfry In the News</li>
              <li>Find A Studio</li>
              <li>Gift Cards</li>
              <li>Brands</li>
              <li>Customer Reviews</li>
            </ul>
          </UsefulLinks>
          <Partners>
            <ul>
              <li className="footer--headings">Partners</li>
              <li>Sell With Us</li>
              <li>Become a Franchisee</li>
              <li>Design For Us</li>
              <li>Pepperfry Marketplace Policies</li>
              <li>Login to Your Merchant Dashboard</li>
              <li>Important : GST and You</li>
              <li>Corporate Enquiries</li>
            </ul>
          </Partners>
          <NeedHelp>
            <ul>
              <li className="footer--headings">Need Help</li>
              <li>Contact Us</li>
              <li>Returns & Refund</li>
              <li>Track Your Order</li>
              <li>FAQs</li>
              <li>Buy on Phone</li>
            </ul>
          </NeedHelp>
          <DownloadApp>
              <h2>Download App</h2>
              <img src={Apple} alt={"AppStore"} /><br/>
              <img src={GooglePlay} alt={"GooglePlay"} />
          </DownloadApp>
        </FooterFirstHalf>
        <FooterSecondHalf>
          <PopularCategories>
            <h1 className="titles">Popular Categories</h1>
            <p>Queen Size Beds, King Size Beds, Coffee Tables, Dining Sets, Recliners, Sofa cum Beds, Rocking Chairs, Cabinets, Book Shelves, TV Unit, Wardrobes, Outdoor Furniture, Bar Cabinets, Wall Shelves, Photo Frames, Bed Sheets, Mattresses, Table Cloth, Living Room Furniture, Study Tables, Dining Room Furniture, Office Furniture, Bed Room Furniture, Dining Table, Beds, Sofas, Sofa Set, Trundle Bed</p>
          </PopularCategories>
          <PopularBrands>
            <h1 className="titles">Popular Brands</h1>
            <p>Mintwud, Woodsworth, CasaCraft, Amberville, Mudramark, Bohemiana, Mollycoddle, Mangiamo, Clouddio, Spacewood, Durian, Star India, Adiko Systems, Crystal Furnitech, Springtek, Story@Home, Parin, Furnitech, Trevi Furniture, Peachtree, Durfi, Muebles Casa, Duroflex</p>
          </PopularBrands>
          <Cities>
            <h1 className="titles">Cities we deliver to</h1>
            <p>Bengaluru, Mumbai, Navi Mumbai, Delhi, Hyderabad, Pune, Chennai, Gurgaon, Kolkata, Noida, Goa, Ghaziabad, Ahmedabad, Coimbatore, Faridabad, Jaipur, Lucknow, Kochi, Visakhapatnam, Chandigarh, Vadodara, Nagpur, Thiruvananthapuram, Indore, Mysore, Bhopal, Surat, Jalandhar, Patna, Ludhiana, Nashik, Madurai, Kanpur, Aurangabad and many more</p>
          </Cities>
        </FooterSecondHalf>
        <hr />
        <FooterThirdHalf>
          <Left>
            <h1 className="titles">We accept</h1>
            <div>
              <img src={Visa} alt={"VisaLogo"} />
              <img src={MasterCard} alt={"MasterCardLogo"} />
              <img src={MaestroCard} alt={"MaestroCardLogo"} />
              <img src={AmericanExpress} alt={"AmericanExpressLogo"} />
              <img src={RuPay} alt={"RupayLogo"} />
              <img src={DinnersCard} alt={"DinnersCardLogo"} />
              <img src={Wallet} alt={"WalletLogo"} />
              <img src={InternetBanking} alt={"InternetBankingLogo"} />
            </div>
          </Left>
        </FooterThirdHalf>
      </FooterBox>
    </>
  )
}

export default Footer