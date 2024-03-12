import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import { ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale } from "./Icons.jsx";
import { AcmeLogo } from "./AcmeLogo.jsx";

export default function Naavigation() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };

  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent justify="end"> {/* Adjust justify-content to end to align items to the right */}
        <NavbarItem>
          <Link href="#" className="nav-link">Features</Link> {/* Add nav-link class */}
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="nav-link">Customers</Link> {/* Add nav-link class */}
        </NavbarItem>
        <NavbarItem>
          <Link href="#" className="nav-link">Integrations</Link> {/* Add nav-link class */}
        </NavbarItem>
        <NavbarItem className="hidden lg:flex"> {/* Add hidden lg:flex to hide on small screens */}
          <Link href="#" className="nav-link">Login</Link> {/* Add nav-link class */}
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat" className="nav-link">Sign Up</Button> {/* Add nav-link class */}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}