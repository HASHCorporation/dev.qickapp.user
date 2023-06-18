import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function BazaarCard() {
    return (
        <>
            {/* start card  */}
            <div className="bazaar_card">
                <div className="d-flex">
                    <div className="baz_profile me-2">
                        <img src="assets/img/home/big_bazaar.svg" alt="big bazaar" />
                    </div>
                    <div>
                        <h3 className="font_700 roboto font_16 mb-2">Big Bazaar</h3>
                        <div className="d-flex">
                            <span class="badge bg-primary me-1 baz_badget">Delivery</span>
                            <span class="badge bg-primary baz_badget">Pick UP</span>
                        </div>
                    </div>
                </div>
                <div className="items my-3">
                    <span>Electronics</span>
                    <span>Home Appliances</span>
                    <span>Grocery</span>
                    <span>Fasion</span>
                </div>
                <div className="text-start d-flex">
                    <div className="text-start d-flex">
                        <AccessTimeIcon sx={{ fontSize: 20 }} />
                        <div className="ms-2">
                            <h3 className='font_700 heading_2  text-start mb-0'>Order From</h3>
                            <p className="font_14 font_400 mb-0 roboto">08:00</p>
                        </div>
                    </div>
                    <div className="text-start d-flex ms-3">
                        <RocketLaunchOutlinedIcon sx={{ fontSize: 20 }} />
                        <div className="ms-2">
                            <h3 className='font_700 heading_2  text-start mb-0'>Delivery</h3>
                            <p className="font_14 font_400 mb-0 roboto">₹ 10</p>
                        </div>
                    </div>
                </div>
                <div className="text-start d-flex mt-3">
                    <CurrencyRupeeOutlinedIcon sx={{ fontSize: 20 }} />
                    <div className="ms-2">
                        <h3 className='font_700 heading_2  text-start mb-0'>Min. order amount</h3>
                        <p className="font_14 font_400 mb-0 roboto">₹ 500</p>
                    </div>
                </div>
            </div>
            {/* end card  */}

            {/* start pagination  */}
            <div className="d-flex justify-content-center align-items-center arrow_blue mt-4">
                <p className="font_16 font_700 roboto text_blue mb-0 me-4">1 - 20  </p>
                <ArrowBackIosIcon sx={{ fontSize: 14 }} /> <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
            </div>
            {/* end pagination  */}
        </>
    )
}