
import './App.css';
import WebFont from "webfontloader"
import React from "react"


import { Routing } from './Routes/Routing';

function App() {

 React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Manrope", "sans - serif"]
      },
    });
  }, []);

  return (
    <>
      < Routing/>
    </>
  );
}

export default App;
