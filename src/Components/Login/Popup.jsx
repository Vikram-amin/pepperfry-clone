import React from 'react'
import { MainLogin } from './Mainlogin'
import "./popup.css"

function Popup() {
    const [buttonPopup, setButtonPopup] = React.useState(false);
  return (
    <>
    <button onClick={()=>setButtonPopup(true)}>Login</button>
    <div className='popup-div'>
        <MainLogin trigger = {buttonPopup} setTrigger={setButtonPopup}/>
    </div>
    </>
  )
}

export default Popup