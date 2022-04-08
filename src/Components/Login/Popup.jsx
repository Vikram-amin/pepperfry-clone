import { Button } from '@mui/material';
import React from 'react'
import { MainLogin } from './Mainlogin'
import "./popup.css"

function Popup() {
  const [popup,popupTrig] = React.useState(false);
  return (
    <>
    <div className='login-btn'>
      <Button onClick={()=>popupTrig(true)}>Login</Button>
    </div>
    <div className='popup-div'>
        <MainLogin trigger = {popup} setTrigger={popupTrig}/>
    </div>
    </>
  )
}

export default Popup