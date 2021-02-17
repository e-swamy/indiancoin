import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-scroll'
import SignUpBtn from './SignUpBtn';
import './_navbar.scss'

export default function NavbarSection() {
    const [expanded, setExpanded] = useState(false);
    const navItemData = [
        {
            id: 1,
            link: 'home',
            linkName: 'Home'
        },
        {
            id: 2,
            link: 'about',
            linkName: 'About Us'
        },
        {
            id: 3,
            link: 'discover',
            linkName: 'Discover'
        },
        {
            id: 4,
            link: 'services',
            linkName: 'Services'
        },
        {
            id: 5,
            link: 'signup',
            linkName: 'SignUp'
        }
    ]
    return (
        <Navbar expanded={expanded} collapseOnSelect expand="lg" bg="white" variant="light" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="home" className="d-flex align-items-center text-uppercase py-0"
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}>Co<span className="icon"><i className='bx bx-rupee' /></span>n</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} >
                    {
                        expanded ? <i className='bx bx-x bx-sm' /> : <i className='bx bx-menu bx-sm' />
                    }
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto" >
                        {
                            navItemData.map((items) => {
                                return (
                                    <Nav.Item key={items.id}>
                                        <Link className="nav-link" to={items.link} onClick={() => setExpanded(false)}
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            offset={-80} >{items.linkName}</Link>
                                    </Nav.Item>
                                )
                            })
                        }
                    </Nav>
                    <Nav>
                        <Nav.Item>
                            <SignUpBtn onClick={() => setExpanded(false)} />
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


