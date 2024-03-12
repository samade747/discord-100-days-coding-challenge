import { useState } from 'react';
import './App.css';
import * as React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { NextUIProvider } from '@nextui-org/react';
import Navigation from './Navbar/Navigation.jsx';

function App() {
  return (
    <NextUIProvider>
      
        <Navigation />  
      
    </NextUIProvider>
  );
}

export default App;
