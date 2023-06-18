import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <>
            <div className="qick_container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="text-center mb-4">
                            <img src="assets/img/header/logo.png" alt="logo" />
                        </div>
                        <h1 className="font_24 font_700 text-center mb-2 pb-1">Sign Up</h1>
                        <p className="qick_pera text_gray text-center mb-0">Enter your details below</p>
                        {/* start form  */}
                        <form className="mt-4 pt-1">
                            <div className="mb-4">
                                <label htmlFor="exampleInputEmail1" className="form-label qick_lable">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control quick_control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Email address"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="exampleInputPassword1" className="form-label qick_lable">
                                    Password
                                </label>
                                <input type="password"
                                    className="form-control quick_control"
                                    id="exampleInputPassword1"
                                    placeholder="Password" />
                                <div className="text-end qick_eye" onClick={handleClickShowPassword}>
                                    {showPassword ? <VisibilityOff /> : <VisibilityIcon />}
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="exampleInputEmail1" className="form-label qick_lable">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    className="form-control quick_control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Phone number"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="exampleInputEmail1" className="form-label qick_lable">
                                    Store Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control quick_control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Name of your store"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 quick_button">
                                Sign Up
                            </button>
                            <p className="text-center quick_foot text_gray font_14 font_400">Already have an account?
                                <Link to={"/"} className="text_blue mb-4 text-decoration-none"> Log In</Link></p>
                        </form>
                        {/* end form  */}
                    </div>
                </div>
            </div>
        </>
    )
}