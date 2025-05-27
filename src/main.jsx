import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NNaF1cWGhPYVF1WmFZfVtgdVdMY15bQH5PMyBoS35Rc0VmW3tecHdWR2BVV0Z2VEBU');

import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react';



createRoot(document.getElementById('root')).render(

    <StrictMode>
      <NextUIProvider>
        <BrowserRouter>

          <App />

        </BrowserRouter>
      </NextUIProvider>
    </StrictMode>


);
