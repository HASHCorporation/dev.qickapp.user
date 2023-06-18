import React from "react";
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import { Rating } from "@mui/material";

export default function Search() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

    return (
        <>
            {/* start searchbar  */}
            <div>
                <div className="text-end qick_eye search" >
                    <SearchIcon />
                </div>
                <input type="text"
                    className="form-control quick_control serch_input"
                    id="exampleInputPassword1"
                    placeholder="Search all orders"
                />
                <div className="text-end qick_eye serch_qick pointer">
                    <FilterListOutlinedIcon onClick={() => setIsDrawerOpen(true)} />
                </div>
            </div>
            {/* end searchbar  */}

            <Drawer
                anchor='bottom'
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                className="drover"
            >
                <div className="position-relative w-100">
                    <CloseIcon className="close_icone pointer" onClick={() => setIsDrawerOpen(false)} />
                    <div className="px-3 py-4 text-center">
                        <h4 className="heading_1 mb-0">Filters</h4>
                    </div>
                </div>

                <div className="bg_body home_container">
                    <div className="text-center roboto font_14 font_700 mb-4 text_black">80 Stores</div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="text-center roboto font_14 font_700 text_black">Open Now</div>
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4 pb-2">
                        <button className="btn btn-primary btn-sm btn_small w-50 me-2">Delivery</button>
                        <button className="btn  btn-sm btn_small w-50 ms-2 btn_gray">Pickup</button>
                    </div>
                    {/* start min amount  */}
                    <div className="mb-4 pb-3">
                        <div className="roboto font_14 font_700 mb-4 text_black">Minimum order amount</div>
                        <div>
                            <div className="form-check mb-0">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    defaultValue="option1"
                                />
                                <label className="form-check-label text_black roboto font_400 font_14 ms-1" htmlFor="inlineRadio1">
                                    No preference
                                </label>
                            </div>
                            <div className="form-check my-2 py-1">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    defaultValue="option2"
                                />
                                <label className="form-check-label text_black roboto font_400 font_14 ms-1" htmlFor="inlineRadio2">
                                    ₹ 100 or less
                                </label>
                            </div>
                            <div className="form-check mb-0">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio3"
                                    defaultValue="option3"
                                />
                                <label className="form-check-label text_black roboto font_400 font_14 ms-1" htmlFor="inlineRadio3">
                                    ₹ 500 or more
                                </label>
                            </div>

                        </div>
                    </div>
                    {/* end min amount  */}

                    {/* start delivery section  */}
                    <div className="mb-4 pb-3">
                        <div className="roboto font_14 font_700 mb-4 text_black">Delivery costs</div>
                        <div>
                            <div className="form-check mb-0">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    defaultValue="option1"
                                />
                                <label className="form-check-label text_black roboto font_400 font_14 ms-1" htmlFor="inlineRadio1">
                                    No preference
                                </label>
                            </div>
                            <div className="form-check my-2 py-1">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    defaultValue="option2"
                                />
                                <label className="form-check-label text_black roboto font_400 font_14 ms-1" htmlFor="inlineRadio2">
                                    Free
                                </label>
                            </div>
                            <div className="form-check mb-0">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio3"
                                    defaultValue="option3"
                                />
                                <label className="form-check-label text_black roboto font_400 font_14 ms-1" htmlFor="inlineRadio3">
                                    ₹ 25 or less
                                </label>
                            </div>
                            <div className="form-check mt-2 pt-1">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio4"
                                    defaultValue="option4"
                                />
                                <label className="form-check-label text_black roboto font_400 font_14 ms-1" htmlFor="inlineRadio4">
                                    ₹ 50 or less
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* end delivery section  */}

                    {/* start delivery cost  */}
                    <div className="mb-4 pb-1">
                        <div className="roboto font_14 font_700 mb-2 text_black">Delivery costs</div>
                        <Rating name="no-value" value={null} className="w-100" />
                    </div>
                    <div className="mb-5">
                        <button className="btn btn-primary w-100 quick_button suport_btn text-center px-2 ">Apply</button>
                    </div>
                    {/* end delivery section  */}
                </div>
            </Drawer>
        </>
    )
}