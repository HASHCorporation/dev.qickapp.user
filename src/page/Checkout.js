import React from "react";
import Header from "../component/Header";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import PaymentsIcon from '@mui/icons-material/Payments';
import { Checkbox } from "@mui/material";

export default function Checkout() {
    return (
        <>
            <div className="bg_body">
                <Header />
                <div className="home_container">
                    <div className='mt-3'>
                        <h1 className='heading_1 font_700 mb-3'>Categories</h1>
                        <div className="bazaar_card">
                            <div className="d-flex align-items-center mb-3 mt-2">
                                <PlaceOutlinedIcon sx={{ fontSize: 25 }} />
                                <h5 className="heading_1 font_700 mb-0 ms-4">Delivery address</h5>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <FormControlLabel value="female" control={<Radio color="success" />} checked />
                                <div>
                                    <h5 className="heading_1 font_700 mb-0 ">695541</h5>
                                    <p className="font_12 font_400 roboto mb-0">House Name, Address line 1</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <FormControlLabel value="female" control={<Radio />} checked />
                                <div className="text-start">
                                    <h5 className="heading_1 font_700 mb-0 ">695541</h5>
                                    <p className="font_12 font_400 roboto mb-0">House Name, Address line 1</p>
                                </div>
                            </div>
                            <div className="border_bottom"></div>
                            <div className="d-flex align-items-center my-3">
                                <DeliveryDiningOutlinedIcon />
                                <h5 className="heading_1 font_700 mb-0 ms-3">Choose fulfillment method & time</h5>
                            </div>
                            <div className="ms-4 mb-4">
                                <button className="btn btn-primary btn-sm btn_small me-3"> Delivery</button>
                                <button className="btn btn-primary btn-sm btn_small me-3 btn_gray border-0"> Pickup</button>
                            </div>
                            <div className="mb-3">
                                <p className="roboto font_400 font_12 text_dark">Order will be delivered <b>within 3 hrs</b> of successful payment.</p>
                                <button className="btn btn-primary btn-sm btn_small me-3 w-50 py-2">Continue</button>
                            </div>  
                            <div className="border_bottom"></div>

                            <div className="d-flex align-items-center my-3">
                                <DescriptionOutlinedIcon />
                                <h5 className="heading_1 font_700 mb-0 ms-3">Delivery instructions</h5>
                            </div>
                            <div className="d-flex align-items-center my-3">
                                <Checkbox defaultChecked color="success" className="p-0" />
                                <p className="mb-0 roboto font_14 font_400 ms-2">Leave at my door if I am not around</p>
                            </div>
                            <div>
                                <p className="roboto font_10 font_700 text_gray">Add additional Delivery instructions</p>
                                <textarea className="form-control my_textarea" placeholder=""></textarea>
                            </div>

                            <div className="border_bottom"></div>
                            <div className="d-flex align-items-center my-3">
                                <LocalPhoneIcon />
                                <h5 className="roboto font_16 text_dark font_700 mb-0 ms-3">Contact number</h5>
                            </div>
                            <p className="font_12 roboto font_700 text_gray text-uppercase mb-1">Please leave your phone number in case we need to call you about your order</p>
                            <input
                                type="text"
                                className="form-control quick_control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="+91 123 456 7890"
                            />
                            <button className="btn btn-primary w-100 quick_button mt-2">Continue</button>
                            <div className="border_bottom mt-4"></div>
                            <div className="d-flex align-items-center my-3">
                                <PaymentOutlinedIcon />
                                <h5 className="roboto font_16 font_700 mb-0 ms-3">Payment method</h5>
                            </div>
                            <button className="btn btn-primary w-100 quick_button">Save</button>

                        </div>
                        <div className="bazaar_card mt-4">
                            <div className="d-flex align-items-center my-3">
                                <PaymentsIcon />
                                <h5 className="heading_1 font_700 mb-0 ms-3">Order Summary</h5>
                            </div>
                            <div className="d-flex align-items-center justify-content-between my-3">
                                <p className="roboto font_16 font_700 text_dark mb-0">Item subtotal</p>
                                <p className="roboto font_16 font_400 text_dark mb-0">₹ 2500.00</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mt-3 mb-4">
                                <p className="roboto font_16 font_700 text_dark mb-0">Tax (GST)</p>
                                <p className="roboto font_16 font_400 text_dark mb-0">₹ 500.00</p>
                            </div>
                            <div className="border_bottom"></div>
                            <div className="d-flex align-items-center justify-content-between my-3">
                                <p className="roboto font_16 font_700 text_dark mb-0">Total payable</p>
                                <p className="roboto font_16 font_400 text_dark mb-0">₹ 3000.00</p>
                            </div>
                            <div className="border_bottom mb-3"></div>
                            <button className="btn_gray btn w-100 font_600">Pay now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}