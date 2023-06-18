import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    return (
        <>
            <div className="qick_container">
                <div className="h_100vh d-flex flex-column justify-content-between">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="text-center mb-4">
                                <img src="assets/img/header/logo.png" alt="logo" />
                            </div>
                            <h1 className="font_24 font_700 text-center mb-2 pb-1">Forgot password</h1>
                            <p className="qick_pera text_gray text-center mb-0">Enter your email address below</p>
                            {/* start form  */}
                            <form className="mt-5">
                                <div className="mb-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label qick_lable">
                                        email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control quick_control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Email address"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 quick_button">
                                    Send OTP
                                </button>
                            </form>
                            {/* end form  */}
                        </div>
                    </div>
                    <p className="text-center quick_foot text_gray font_14 font_400">Don’t have an account?
                        <Link to={"/signup"} className="text_blue mb-4 text-decoration-none"> Sign up</Link><br />
                        <Link to={"/"} className="text_blue mb-4 text-decoration-none">Login </Link> instead.
                    </p>
                </div>
            </div>
        </>
    )
}