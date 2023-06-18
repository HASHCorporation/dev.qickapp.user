import SortIcon from '@mui/icons-material/Sort';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import NearMeIcon from '@mui/icons-material/NearMe';
import SearchIcon from '@mui/icons-material/Search';


export default function Header() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
    const [contact, setContact] = React.useState(false)
    return (
        <>
            {/* start header  */}
            <div className="header_con_qick">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <SortIcon className="pointer" onClick={() => setIsDrawerOpen(true)} />
                    <img src="assets/img/header/mainlogo.svg" alt="logo" />
                    <button type="button" class="btn btn-primary p-1 radius_8 cart d-flex align-items-center font_700">
                        <img src="assets/img/home/cart.svg" alt="img" className="me-1" />10
                    </button>
                </div>
            </div>
            {/* end header  */}


            {/* start saidbar  */}
            <Drawer
                anchor='left'
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              
            >
                <Box pt={5} px={2} pb={3} width="286px" role="presention">

                    {/* start username section  */}
                    <div className='d-flex justify-content-start align-items-center'>
                        <div className='profile d-flex justify-content-center align-items-center me-3'>
                            <img src='assets/img/home/profile.svg' alt='profile' className='img-fluid' />
                        </div>
                        <h4 className='profile_heding mb-0'>User Name</h4>
                    </div>
                    {/* end username section  */}

                    {/* without login start */}
                    <button type="button" class="btn  btn-outline-primary btn-sm btn_small me-3">Login</button>
                    <button type="button" class="btn btn-primary btn-sm btn_small">Sign Up</button>
                    {/* without login end*/}

                    {/* profile photo section start  */}
                    <div className='d-flex justify-content-start align-items-center'>
                        <div className='me-3 border-none'>
                            <img src='assets/img/home/avtar.svg' alt='profile' className='img-fluid' />
                        </div>
                        <div>
                            <h4 className='font_16 font_700 roboto mb-0 text_dark'>Julia Roberts</h4>
                            <p className='text_gray roboto font_12 font_400 mb-0'>julia.roberts@gmail.com</p>
                        </div>
                    </div>
                    {/* profile photo section end  */}
                </Box>

                {/* start menu saidbar  */}
                <div className='d-flex flex-column menu_height justify-content-between'>
                    <ul className='menu list-unstyled'>
                        <li className='active'><img src='assets/img/home/home.svg' className='me-3 img-fluid' alt='home' /> Home</li>
                        <li><img src='assets/img/home/shopping_cart.svg' className='me-3 img-fluid' alt='home' />Shop Deals</li>
                        <li><Link to={'/account'}> Your account</Link></li>
                        <li><Link to={''}>Your Orders</Link></li>
                    </ul>
                    <ul className='menu list-unstyled social mt-5 pt-4'>
                        <li><img src='assets/img/social/facebook.svg' className='me-3 img-fluid' alt='home' /> Facebook</li>
                        <li><img src='assets/img/social/instagram.svg' className='me-3 img-fluid' alt='home' />Instagram</li>
                        <li><img src='assets/img/social/whatsapp.svg' className='me-3 img-fluid' alt='home' />Whatsapp</li>
                        <li>
                            <img src='assets/img/social/twitter.svg' className='me-3 img-fluid' alt='home' />Twitter
                        </li>
                    </ul>
                    <div className='mx-3 mt-3 mb-3'>
                        <button className='btn btn-primary w-100 quick_button suport_btn' onClick={() => setContact(true)}>
                            <SupportAgentIcon /> Contact</button>
                    </div>
                    <p className='text-center mb-4 font_12 font_400 roboto text_blue'>Log Out</p>
                </div>
                {/* end menu saidbar  */}
            </Drawer>
            {/* end saidbar  */}


            {/* start contect support */}
            <Drawer
                anchor='bottom'
                open={contact}
                onClose={() => setContact(false)}
                className='drover'
            >
                {/* start heading  */}
                <div className="position-relative w-100">
                    <CloseIcon className="close_icone pointer" onClick={() => setContact(false)} />
                    <div className="px-3 py-4 text-center">
                        <h4 className="heading_1 mb-0">
                            Choose Postal Code or <br /> select saved address
                        </h4>
                    </div>
                </div>
                {/* end heading  */}
                <div className="bg_body home_container h_100vh d-flex justify-content-between flex-column">
                    <div>
                        <div className="text-end qick_eye search" >
                            <SearchIcon />
                        </div>
                        <input type="text"
                            className="form-control quick_control serch_input"
                            id="exampleInputPassword1"
                            placeholder="Add New Address"
                        />
                        <div className="d-flex justify-content-start align-items-center mt-4">
                            <div className="road_line road_green">
                                <span></span>
                            </div>
                            <div className='ms-4'>
                                <h6 className='roboto font_18 font_700 text_dark mb-0'>Home</h6>
                                <p className="mb-0 font_16 font_400 roboto text_dark">House name, Street, District, Postcode</p>
                            </div>
                        </div>
                    </div>
                    <div className='align-items-center justify-content-center d-flex border-top pt-3'>
                        <NearMeIcon color="#F0F1F7" />
                        <p className='text_gray font_18 font_400 roboto mb-0 ms-2'>
                            Use current location
                        </p>
                    </div>
                </div>
            </Drawer>
            {/* end contect support */}
        </>
    )
}