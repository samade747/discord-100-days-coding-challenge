import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import Navigation from './Navbar/Navigation.jsx';


function App() {
  

  return (
    <NextUIProvider>
     
      <Navigation />
     
        

    </ NextUIProvider>
  )
}

export default App
