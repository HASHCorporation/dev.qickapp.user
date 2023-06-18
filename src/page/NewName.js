import React from "react";

export default function NewName() {
    return (
        <>
            <div className="qick_container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="text-center mb-4">
                            <img src="assets/img/header/logo.png" alt="logo" />
                        </div>
                        <h1 className="font_24 font_700 text-center pb-2">Enter new name</h1>
                        {/* start form  */}
                        <form className="mt-4">
                            <div className="mb-4">
                                <label htmlFor="exampleInputEmail1" className="form-label qick_lable">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control quick_control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="John Smith"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100 quick_button">
                                Save
                            </button>
                        </form>
                        {/* end form  */}
                    </div>
                </div>
            </div>
        </>
    )
}