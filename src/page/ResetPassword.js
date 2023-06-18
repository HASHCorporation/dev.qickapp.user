import React from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
    return (
        <>
            <div className="qick_container">
                <div className="h_100vh d-flex flex-column justify-content-between">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="text-center mb-4">
                                <img src="assets/img/header/logo.png" alt="logo" />
                            </div>
                            <h1 className="font_24 font_700 text-center mb-2 pb-1">Reset password</h1>
                            <p className="qick_pera text_gray text-center mb-0">Enter new password</p>
                            {/* start form  */}
                            <form className="mt-4 pt-1">
                                <div className="mb-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label qick_lable">
                                        PASSWORD
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control quick_control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter new password"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="exampleInputEmail1" className="form-label qick_lable">
                                        Confirm password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control quick_control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Re enter password"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 quick_button">
                                    Reset Password
                                </button>
                            </form>
                            {/* end form  */}
                        </div>
                    </div>
                    <p className="text-center quick_foot text_gray font_14 font_400">Don’t have an account?
                        <Link to={"/signup"} className="text_blue mb-4 text-decoration-none"> Sign Up</Link></p>
                </div>
            </div>
        </>
    )
}