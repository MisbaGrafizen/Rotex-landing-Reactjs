import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-buttons/styles/material.css';
import '@syncfusion/ej2-react-calendars/styles/material.css';
import '@syncfusion/ej2-react-dropdowns/styles/material.css';
import '@syncfusion/ej2-react-inputs/styles/material.css';
import '@syncfusion/ej2-react-navigations/styles/material.css';
import '@syncfusion/ej2-react-popups/styles/material.css';
import '@syncfusion/ej2-react-schedule/styles/material.css';





import Cookies from 'js-cookie';
import Home from "./pages/home/Home";



function App() {
  const user = Cookies.get("user");


  return (
    <>

      <div className="w-100 ease-soft-spring h-[100%]  !bg-[#ffffff]  duration-1000 ">
      
        <Routes>
        <Route path="/" element={<Home />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
