import React from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from "react-router-dom";
export default function FourZeroFour() {
    return (
        <>
            <div className="qick_container p-0">
                <div className="home_container h_100vh four_bg">
                    <div className="text-center mt-5">
                        {/* start logo and btn  */}
                        <img src="assets/img/header/logo.png" alt="logo" className="mb-2" />
                        <br />
                        <Link to={'/'} class="btn  btn-outline-primary btn-sm btn_small me-3 p-3">Login</Link>
                        <Link to={'/signup'} class="btn btn-primary btn-sm btn_small p-3">Sign Up</Link>
                        {/* end logo and btn  */}

                        {/* start discription  */}
                        <h1 className="roboto text-uppercase text_yellow four_zero mt-5">404</h1>
                        <p className="roboto font_16 font_700 text_dark mb-5 pb-4">Oops, The Page you are <br />
                            looking for Could Not Be Found.</p>
                        {/* end discription  */}

                        <button type="submit" className="btn btn-primary w-100 quick_button redus_70">
                            <KeyboardBackspaceIcon className="me-2" />
                            Back to home
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}