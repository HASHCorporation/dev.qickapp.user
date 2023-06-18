import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";

export default function OrderCard() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)
    const [cancel, setCancel] = useState(false)
    const [orderc, setOrderc] = useState(false)
    return (
        <>
            <div className="bazaar_card">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex">
                        <div className="baz_profile me-2">
                            <img src="assets/img/home/big_bazaar.svg" alt="big bazaar" />
                        </div>
                        <div>
                            <h3 className="font_700 roboto font_16 mb-2">Big Bazaar</h3>
                            <div className="d-flex align-items-center">
                                <span className="me-2 roboto font_14 font_700"> Home</span>
                                <span class="badge bg-primary baz_badget">Delivery</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-end">
                        <p className="mb-0 font_12 font_400 roboto">Yesterday, 08:04 PM</p>
                        <p className="text_blue font_14 font_700">₹ 872.49</p>
                    </div>
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary w-100 quick_button suport_btn text-center px-2 mb-3">Order details</button>
                    <button className="btn btn-primary w-100 quick_button suport_btn text-center px-2 mb-3" onClick={() => setIsDrawerOpen(true)}>Track order</button>
                    <button className="btn btn-primary w-100 quick_button suport_btn text-center px-2 mb-3">Contact store</button>
                    <button className="btn btn-primary w-100 quick_button suport_btn text-center px-2 mb-3">Return items</button>
                    <button className="btn btn-primary w-100 quick_button suport_btn text-center px-2" onClick={() => setCancel(true)}>Cancel order</button>
                </div>
                <Drawer
                    anchor='bottom'
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    className="drover"
                >
                    <div className="position-relative w-100">
                        <CloseIcon className="close_icone pointer" onClick={() => setIsDrawerOpen(false)} />

                        <div className="px-3 py-4 text-center">
                            <h4 className="heading_1 mb-0">Track your order</h4>
                        </div>
                    </div>
                    <div className="bg_body home_container h_100vh d-flex justify-content-between flex-column">
                        <div className="mt-4">
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex">
                                    <div className="baz_profile me-2 trak_rounded">
                                        <img src="assets/img/home/big_bazaar.svg" alt="big bazaar" className="img-fluid" />
                                    </div>
                                    <div>
                                        <h3 className="font_700 roboto font_16 mb-2">Big Bazaar</h3>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 roboto font_12 font_400"> 12 : 01 PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <p className="text_blue font_14 font_700">ORD0000000001</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <div className="road_line road_active">
                                    <span></span>
                                    <p className="mb-0 font_10 font_700 text_dark">Accepted</p>
                                </div>
                                <div className="road_line road_active">
                                    <span></span>
                                    <p className="mb-0 font_10 font_700 text_dark">Prepared</p>
                                </div>
                                <div className="road_line road_active">
                                    <span></span>
                                    <p className="mb-0 font_10 font_700 text_dark">Shipped</p>
                                </div>
                                <div className="road_line road_stop">
                                    <span></span>
                                    <p className="mb-0 font_10 font_700 text_dark">In Transit</p>
                                </div>
                                <div className="road_line">
                                    <span></span>
                                    <p className="mb-0 font_10 font_700 text_dark">Delivered</p>
                                </div>
                                <div className="road_line">
                                    <span></span>
                                    <p className="mb-0 font_10 font_400 text_dark">Completed</p>
                                </div>
                            </div>
                            <p className="font_10 font_400 roboto text_dark mt-4 text-center">Your order has been picked up and currently being delivered by the driver</p>
                        </div>
                        <div>
                            <div className='mt-3 mb-4'>
                                <button className='btn btn-primary w-100 quick_button suport_btn text-center ps-2'>
                                    <SupportAgentIcon /> Contact Store</button>
                            </div>
                        </div>
                    </div>
                </Drawer>
                <Drawer
                    anchor='bottom'
                    open={cancel}
                    onClose={() => setCancel(false)}
                    className="drover"
                >
                    <div className="position-relative w-100">
                        <CloseIcon className="close_icone pointer" onClick={() => setCancel(false)} />

                        <div className="px-3 py-4 text-center">
                            <h4 className="heading_1 mb-0">Cancel your order</h4>
                        </div>
                    </div>
                    <div className="bg_body home_container h_100vh d-flex justify-content-between flex-column">
                        <div className="mt-4">
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="d-flex">
                                    <div className="baz_profile me-2 ">
                                        <img src="assets/img/home/big_bazaar.svg" alt="big bazaar" />
                                    </div>
                                    <div>
                                        <h3 className="font_700 roboto font_16 mb-2">Big Bazaar</h3>
                                        <div className="d-flex align-items-center">
                                            <span className="me-2 roboto font_12 font_400"> 12 : 01 PM</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <p className="text_blue font_14 font_700">ORD0000000001</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4">
                                <div className="road_line road_active">
                                    <span></span>
                                    <p className="mb-0 font_10 font_700 text_dark">Accepted</p>
                                </div>
                                <div className="road_line road_active">
                                    <span></span>
                                    <p className="mb-0 font_10 font_700 text_dark">Prepared</p>
                                </div>
                                <div className="road_line road_active">
                                    <span></span>
                                    <p className="mb-0 font_10 font_700 text_dark">Shipped</p>
                                </div>
                                <div className="road_line road_stop">
                                    <span></span>
                                    <p className="mb-0 font_10 font_700 text_dark">In Transit</p>
                                </div>
                                <div className="road_line">
                                    <span></span>
                                    <p className="mb-0 font_10 font_700 text_dark">Delivered</p>
                                </div>
                                <div className="road_line">
                                    <span></span>
                                    <p className="mb-0 font_10 font_400 text_dark">Completed</p>
                                </div>
                            </div>
                            <p className="font_10 font_400 roboto text_dark mt-4 text-center">Your order has been picked up and currently being delivered by the driver</p>
                        </div>
                        <div>
                            <div className='mt-3 mb-4'>
                                <p className="text-center roboto font_700 font_12 pointer"> Do you still want to cancel?</p>
                                <button className="btn btn-danger w-100 py-2 suport_btn text-center px-2 mb-3" onClick={() => setOrderc(true)}>Yes, Cancel my order</button>
                                <button className='btn btn-primary w-100 quick_button suport_btn py-2 ps-2 text-center'>
                                    <SupportAgentIcon /> Contact Store</button>
                            </div>
                        </div>

                    </div>
                </Drawer>
                <Drawer
                    className="drower_rounded drover"
                    anchor='bottom'
                    open={orderc}
                    onClose={() => setOrderc(false)}
                >
                    <div className="d-flex justify-content-end align-items-end pt-3 pe-3 pointer w-100">
                        <CloseIcon className="" onClick={() => setOrderc(false)} />
                    </div>
                    <div className="d-flex align-items-center p-4 pt-0 justify-content-center flex-column">

                        <div className="baz_profile me-2 trak_rounded">
                            <img src="assets/img/home/big_bazaar.svg" alt="big bazaar" className="img-fluid" />
                        </div>
                        <div className="text-center">
                            <h3 className="font_700 roboto font_16 mb-0">Big Bazaar</h3>
                            <span className="me-2 roboto font_12 font_400"> 12 : 01 PM</span>
                            <p className="text_blue font_12 mt-4 font_700 mb-0">ORD0000000001</p>
                            <p className="text_dark font_18 font_700 roboto mb-3">Your order has been cancelled</p>
                            <img src="/assets/img/popup/ticket.svg" className="img-fluid" />
                            <Link to={"/home"} className="btn btn-primary w-100 text-center suport_btn ps-2 mt-3 py-2">
                                Go back to the Store</Link>
                        </div>
                    </div>
                </Drawer>
            </div>

        </>
    )
}