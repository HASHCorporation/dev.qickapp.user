import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function Login() {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    return (
        <>
            <div className="qick_container">
                <div className="h_100vh d-flex flex-column justify-content-between">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="text-center mb-4">
                                <img src="assets/img/header/logo.png" alt="logo" />
                            </div>
                            <h1 className="font_24 font_700 text-center mb-2 pb-1">Log In</h1>
                            <p className="qick_pera text_gray text-center">Enter your email and password below</p>
                            {/* start form  */}
                            <form className="mt-5">
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
                                    <div className="d-flex justify-content-between">
                                        <label htmlFor="exampleInputPassword1" className="form-label qick_lable">
                                            Password
                                        </label>
                                        <Link to={"/forgotpassword"} className="text_gray font_10 font_400 mb-0 text-decoration-none">
                                            Forgot password?</Link>
                                    </div>
                                    <input type="password"
                                        className="form-control quick_control"
                                        id="exampleInputPassword1"
                                        placeholder="Password" />
                                    <div className="text-end qick_eye" onClick={handleClickShowPassword}>
                                        {showPassword ? <VisibilityOff /> : <VisibilityIcon />}
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100 quick_button">
                                    Log In
                                </button>
                            </form>
                            {/* end form  */}
                        </div>
                    </div>
                    <p className="text-center quick_foot text_gray font_14 font_400">Don’t have an account?
                        <Link to={"/signup"} className="text_blue mb-4 text-decoration-none"> Sign up</Link></p>
                </div>
            </div>
        </>
    )
}