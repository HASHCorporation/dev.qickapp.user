import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';

export default function NewAddress() {
    return (
        <>
            <div className="qick_container">
                <div className="h_100vh d-flex flex-column justify-content-start ">
                    <div className="text-center position-relative pt-5">
                        <CloseIcon className="position-absolute start-0 pointer" />
                        <h1 className="font_24 font_700 text_black text-center d-inline-block mb-0">Enter new address</h1>
                    </div>
                    <form className="mt-5">
                        <div className="mb-4">
                            <input
                                type="text"
                                className="form-control quick_control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Label"
                            />
                        </div>

                        <div className="mb-4">
                            <input type="text"
                                className="form-control quick_control"
                                placeholder="House or Building Name" />
                        </div>
                        <div className="mb-4">
                            <input type="text"
                                className="form-control quick_control"
                                placeholder="Address" />
                        </div>
                        <div className="mb-4">
                            <input type="text"
                                className="form-control quick_control"
                                placeholder="Address Line 2" />
                        </div>
                        <div className="mb-4">
                            <input type="text"
                                className="form-control quick_control ps-5"
                                placeholder="Pin code" />
                            <div className="qick_eye pin_icone">
                                <LocationOnIcon />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 quick_button">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}