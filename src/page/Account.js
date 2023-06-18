import React from "react";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
export default function Account() {
    return (
        <>
            <div className="qick_container p-0">
                <div className="home_container bg_blue position-relative mb-5">
                    <h1 className="heading_1 text_white roboto font_700 account_1">
                        Welcome back, <br />
                        John Smith!
                    </h1>
                    <div className="card_fav">
                        <div className="d-flex justify-content-between">
                            <div className="fav_card pointer">
                                <img src="assets/img/account/heart.svg" />
                                <h5 className="roboto">My favorites</h5>
                            </div>
                            <div className="fav_card pointer">
                                <img src="assets/img/account/bag.svg" />
                                <h5 className="roboto">Order History</h5>
                            </div>
                            <div className="fav_card pointer">
                                <img src="assets/img/account/gift.svg" />
                                <h5 className="roboto">Invite friends</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_container bg_body pt-5">
                    <div className="roboto font_14 font_700 mb-4 text_dark">Need help?</div>
                    <div className="d-flex justify-content-between align-items-center border_bottom pb-3 mb-3">
                        <div className="d-flex  text_dark font_14 font_500 roboto align-items-center">
                            <img src="assets/img/account/faq.svg" alt="faq" className="me-2" />
                            FAQ
                        </div>
                        <div className="pointer">
                            <ArrowForwardIosOutlinedIcon />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border_bottom pb-3 mb-3">
                        <div className="d-flex  text_dark font_14 font_500 roboto align-items-center">
                            <img src="assets/img/account/support.svg" alt="Customer support" className="me-2" />
                            Customer support
                        </div>
                        <div className="pointer">
                            <ArrowForwardIosOutlinedIcon />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border_bottom pb-3 mb-3">
                        <div className="d-flex  text_dark font_14 font_500 roboto align-items-center">
                            <img src="assets/img/account/feedback.svg" alt="Give Feedback" className="me-2" />
                            Give Feedback
                        </div>
                        <div className="pointer">
                            <ArrowForwardIosOutlinedIcon />
                        </div>
                    </div>

                    <div className="roboto font_14 font_700 mb-4 text_dark mt-5">Legal</div>
                    <div className="d-flex justify-content-between align-items-center border_bottom pb-3 mb-3">
                        <div className="d-flex  text_dark font_14 font_500 roboto align-items-center">
                            <img src="assets/img/account/policy.svg" alt="Privacy policy" className="me-2" />
                            Privacy policy
                        </div>
                        <div className="pointer">
                            <ArrowForwardIosOutlinedIcon />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border_bottom pb-3 mb-3">
                        <div className="d-flex  text_dark font_14 font_500 roboto align-items-center">
                            <img src="assets/img/account/term.svg" alt="Terms & Conditions" className="me-2" />
                            Terms & Conditions
                        </div>
                        <div className="pointer">
                            <ArrowForwardIosOutlinedIcon />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center border_bottom pb-3 mb-3">
                        <div className="d-flex  text_dark font_14 font_500 roboto align-items-center">
                            <img src="assets/img/account/term.svg" alt="Imprint" className="me-2" />
                            Imprint
                        </div>
                        <div className="pointer">
                            <ArrowForwardIosOutlinedIcon />
                        </div>
                    </div>

                    <div className="roboto font_14 font_700 mb-4 text_dark mt-5">Account Management</div>
                    <div className="d-flex justify-content-between align-items-center  pb-3 mb-3">
                        <div className="d-flex  text_dark font_14 font_500 roboto align-items-center">
                            <img src="assets/img/account/user_account.svg" alt="Delete my account" className="me-2" />
                            Delete my account
                        </div>
                        <div className="pointer">
                            <ArrowForwardIosOutlinedIcon />
                        </div>
                    </div>
                    <div className="mb-5">
                        <button className="btn btn-danger w-100 py-2 suport_btn text-center px-2 ">Log out</button>
                    </div>
                </div>
            </div>
        </>
    )
}