import React from "react";
import Header from "../component/Header";

export default function AccountInfo() {
    return (
        <>
            <div className="bg_body">
                <Header />
                <div className="home_container">
                    <div>
                        <h1 className="font_18 font_700 grocery_heading roboto text_account mb-4"> Account information</h1>
                        <div className="d-flex align-items-start justify-content-between mb-3">
                            <div>
                                <h6 className="mb-0 text_account font_16 font_700 roboto">Email address</h6>
                                <p className="text_dark font_16 font_400 roboto mb-0">user.name@email.com</p>
                            </div>
                            <span className="roboto font_16 font_400 text_blue pointer">Change</span>
                        </div>
                        <div className="d-flex align-items-start justify-content-between mb-3 border_bottom pb-3">
                            <div>
                                <h6 className="mb-0 text_account font_16 font_700 roboto">Password</h6>
                                <p className="text_dark font_16 font_400 roboto mb-0">************************</p>
                            </div>
                            <span className="roboto font_16 font_400 text_blue pointer">Change</span>
                        </div>
                    </div>
                    <div>
                        <h1 className="font_18 font_700 grocery_heading roboto text_account mb-4">Personal information  </h1>
                        <div className="d-flex align-items-start justify-content-between mb-3">
                            <div>
                                <h6 className="mb-0 text_account font_16 font_700 roboto">Name</h6>
                                <p className="text_dark font_16 font_400 roboto mb-0">Harikrishnan</p>
                            </div>
                            <span className="roboto font_16 font_400 text_blue pointer">Change</span>
                        </div>
                        <div className="d-flex align-items-start justify-content-between mb-3 border_bottom pb-3">
                            <div>
                                <h6 className="mb-0 text_account font_16 font_700 roboto">Phone number</h6>
                                <p className="text_dark font_16 font_400 roboto mb-0">+91 12345 67890</p>
                            </div>
                            <span className="roboto font_16 font_400 text_blue pointer">Change</span>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex align-items-start justify-content-between mb-3">
                            <h1 className="font_18 font_700 grocery_heading roboto text_account mb-4">Addresses  </h1>
                            <span className="roboto font_16 font_400 text_blue pointer">+ Add new address</span>
                        </div>
                        <div className="d-flex align-items-start justify-content-between mb-3">
                            <div>
                                <p className="text_dark font_16 font_400 roboto mb-0">
                                    House Name / Number <br />Street Name <br /> Municipality / Panchayath / Village <br />
                                    District<br />
                                    State<br />
                                    Pin
                                </p>
                            </div>
                            <span className="roboto font_16 font_400 text_blue pointer">Edit</span>
                        </div>

                    </div>

                </div>
            </div >

        </>
    )
}