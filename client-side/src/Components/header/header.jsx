import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as Icon from "react-icons/bs";

import { useState } from 'react';

function OffcanvasExample({handleLinkClick}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>           
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand}>
                    <Container >
                        <Navbar.Brand href="/">Department MIS</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
                            <Button type="button" className="btn btn-light border border-all py-1 px-1 col-sm-9 btm-sm font-size"><Icon.BsList style={{ color: 'black', fontSize: '25px' }}></Icon.BsList></Button>
                        </Navbar.Toggle>
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className={'w-75'}
                        >
                            <Offcanvas.Header className='bg-light' closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <div style={{fontSize:'24px'}}>
                                        Menu
                                    </div>
                                </Offcanvas.Title>
                            </Offcanvas.Header>

                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                               
                                    <Nav.Link href="#" >Home</Nav.Link>
                                    <hr className="hr" />
                                    <NavDropdown
                                        title="About"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item onClick={()=>{handleLinkClick('department')}}>Department</NavDropdown.Item>                                       
                                        <NavDropdown.Item onClick={()=>{handleLinkClick('staff&faculty')}}>
                                            Faculty & Staff
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/developers">
                                            Developers
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <hr className="hr" />
                                    <Nav.Link href="#">Careers</Nav.Link>
                                    <hr className="hr" />
                                    <Nav.Link onClick={()=>{handleLinkClick('contact')}}>Contact</Nav.Link>
                                    <hr className="hr" />
                                    <NavDropdown
                                        title="More"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="/#">Alumnus</NavDropdown.Item>
                                        <NavDropdown.Item href="#">
                                            Blogs 
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/#">
                                           Publications
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/#">
                                           Research
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="/#">
                                            Gallery
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <hr className="hr" />

                                </Nav>
                                <Button type="button" onClick={handleOpenModal}  style={{ backgroundColor: 'darkblue', color: 'white' }} className="btn  btn-sm border border-all py-2 px-3 "><Icon.BsPerson style={{ fontSize: '20px', marginRight: '3px', marginTop: "-2px" }}></Icon.BsPerson>Accounts</Button>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}

        </>
    );
}

export default OffcanvasExample;