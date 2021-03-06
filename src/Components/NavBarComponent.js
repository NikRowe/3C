import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';


const NavBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar sticky="top" light expand="lg" className="navbar">
            {/* Mobile Display Logo */}
            <NavbarBrand href="/" className="d-lg-none "><img src="/Img/Logo.png" width="125" height="125" alt="3C Soccer Logo" /></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar className="collapse">
                <Nav navbar className="mr-auto">
                    <NavItem className="navButton">
                        <NavLink className="text-white" href="/about">About</NavLink>
                    </NavItem>
                    <NavItem className="navButton">
                        <NavLink className="text-white" href="/summerCamps">Summer Camps</NavLink>
                    </NavItem>
                    <NavItem className="navButton">
                        <NavLink className="text-white" href="/smallGroupTraining">Small Group/Individual Trainings</NavLink>
                    </NavItem>
                </Nav>
                {/* Desktop display logo */}
                <NavbarBrand href="/" className="desktopNavImg d-none d-lg-block mr-0 mt-5 pt-4 pb-0"><img src="/Img/Logo.png" width="150" height="150" alt="3C Soccer Logo" /></NavbarBrand>
            </Collapse>
        </Navbar>
    )
}

export default NavBar