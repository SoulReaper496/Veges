import React from 'react'

//getting navbar  and Formcontrol which is using for searchbar barfrom bootstrap
import { 
    Badge,
    Container,
    FormControl, 
    Dropdown,
    Navbar,
       } from 'react-bootstrap'

//getting icons from react -icons

import { FaShoppingCart} from "react-icons/fa"

//react router dom

import{ Link } from "react-router-dom"

//header
const Header = () => {
    return (
        <div>
                 
             {/* For Logo and brand name  */}
              <Navbar bg="dark" varient="dark" style={{height:80}}>
 <Container>
             <Navbar.Brand href="#home">
                 <Link  to="/">Veges</Link>
             </Navbar.Brand>

               {/*For search bar  */}
             <Navbar.Text ClassName="Search">
                    <FormControl  style={{width :400}}
                     placeholder = "Search a product"
                     className="m-auto"
                />
                     
             </Navbar.Text>

             {/*  Add card Dropdown buttom */}
             <Dropdown alignRight>
                     <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <FaShoppingCart color="white" fontsize="25px"/>
                          <Badge>10</Badge>
                        </Dropdown.Toggle>

                   <Dropdown.Menu>
                   <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                   <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>

        
 </Container>
  </Navbar>
        </div>
    )
}

export default Header
