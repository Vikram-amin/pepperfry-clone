import { Home } from '@mui/icons-material';
import React from 'react'
import { Routes, Route } from "react-router-dom";

const RouterComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </div>
  );
}

export { RouterComponent };