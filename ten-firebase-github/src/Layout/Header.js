import React,{useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import {Collapse,Navbar,NavbarBrand,NavbarToggler,Nav,NavItem,NavLink, NavbarText} from "reactstrap"
import userContext from '../Context/UserContext'


const  Header =()=> {
    
    const context = useContext(userContext)

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>setIsOpen(!isOpen)

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white">LCO GIT FIRE APP</Link>
            </NavbarBrand>
            <NavbarText className="text-white">
            {
                context.user?.email ? context.user.email:""
            }
            </NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                {
                    context.user ? (<NavItem >
                        <NavLink onClick={()=>{context.setUser(null)}} className="text-white">Logout</NavLink>
                    </NavItem>):(<>
                        <NavItem >
                    <NavLink tag={Link} to="/signin" className="text-white">Signin</NavLink>
                    </NavItem>
                    <NavItem >
                    <NavLink tag={Link} to="/signup" className="text-white">Signup</NavLink>
                    </NavItem>
                        </>)
                }
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header
