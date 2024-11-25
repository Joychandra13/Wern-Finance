import React from 'react'
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, } from "@nextui-org/react";
import Logo from "./Logo";

function NevBar() {
  return (
    <>
        <Navbar shouldHideOnScroll isBlurred={false} className="bg-transparent w-full " maxWidth="xl">
            <NavbarBrand>
                <div className="w-16">
                    <Logo />
                </div>

                <h3 className="font-bold text-lg text-white sm:text-xl">Wern Finance</h3>
            </NavbarBrand>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="bordered" radius="full">
                        Contact
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    </>
  )
}

export default NevBar