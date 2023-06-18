import React from "react";
import Header from '../component/Header';
import Search from '../component/Search';
import BazaarCard from '../component/BazaarCard';
import { Link } from "react-router-dom";


export default function Storelist() {
    return (
        <>
            <div className="bg_body">
                <Header />
                <div className="home_container">
                    <Search />
                    <div className='mt-3'>
                        <h1 className='heading_1 font_700 mb-3'>Categories</h1>
                        <div className='row gx-1 justify-content-between'>
                            <div className=' col-auto px-2'>
                                <div className='cate_sec'>
                                    <img src='assets/img/home/grocery.png' alt='Grocery' className='img-fluid' />
                                </div>
                                <h2 className='font_700 heading_2 mt-1'>Grocery</h2>
                            </div>
                            <div className=' col-auto px-2'>
                                <div className='cate_sec'>
                                    <img src='assets/img/home/bakery.png' alt='Bakery' className='img-fluid' />
                                </div>
                                <h2 className='font_700 heading_2 mt-1'>Bakery</h2>
                            </div>
                            <div className=' col-auto px-2'>
                                <div className='cate_sec'>
                                    <img src='assets/img/home/meet.png' alt='Meet & Seafood' className='img-fluid' />
                                </div>
                                <h2 className='font_700 heading_2 mt-1'>Meet & <br /> Seafood</h2>
                            </div>
                            <div className=' col-auto px-2'>
                                <div className='cate_sec'>
                                    <img src='assets/img/home/breakfast.png' alt='Breakfast' className='img-fluid' />
                                </div>
                                <h2 className='font_700 heading_2 mt-1'>Breakfast</h2>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center my-3 py-1">
                        <div className="baz_profile me-2">
                            <img src="assets/img/home/big_bazaar.svg" alt="big bazaar" />
                        </div>
                        <div>
                            <h3 className="font_700 roboto font_16 mb-2">Big Bazaar</h3>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <h3 className='heading_1 font_700 mb-0'>Grocery</h3>
                        <Link to={""} className="text_blue font_12 font_400 mb-0">View All</Link>
                    </div>
                    <div className="row gx-4 gy-3">
                        <div className="col-6">
                            <div className="grocery_card text-center h-100">
                                <img src="/assets/img/home/tomato.png" alt="tomato" className="img-fluid" />
                                <h5 className="roboto font_700 grocery_heading text_green mb-0">₹ 100 (KG)</h5>
                                <p className="mb-1 pb-1 font_12 font_400 text_dark">Roma Tomato</p>
                                <div className="position-relative">
                                    <h6 className="roboto font_700 text_danger grocery_heading text_danger">₹ 150 (KG)</h6>
                                    <span className="grocry_span"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="grocery_card text-center h-100">
                                <img src="/assets/img/home/tomato2.png" alt="tomato" className="img-fluid" />
                                <h5 className="roboto font_700 grocery_heading text_dark mb-0">₹ 100 (KG)</h5>
                                <p className="mb-1 pb-1 font_12 font_400 text_dark">Roma Tomato</p>
                                <div className="position-relative">
                                    <h6 className="roboto font_700 text_danger grocery_heading text_danger">₹ 270 (KG)</h6>
                                    <span className="grocry_span"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="grocery_card text-center h-100">
                                <img src="/assets/img/home/tomato2.png" alt="tomato" className="img-fluid" />
                                <h5 className="roboto font_700 grocery_heading text_dark mb-0">₹ 100 (KG)</h5>
                                <p className="mb-4 pb-1 font_12 font_400 text_dark">Roma Tomato</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="grocery_card text-center h-100">
                                <img src="/assets/img/home/tomato2.png" alt="tomato" className="img-fluid" />
                                <h5 className="roboto font_700 grocery_heading text_dark mb-0">₹ 100 (KG)</h5>
                                <p className="mb-4 pb-1 font_12 font_400 text_dark">Roma Tomato</p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between mb-3 mt-4">
                        <h3 className='heading_1 font_700 mb-0'>Bakery</h3>
                        <Link to={""} className="text_blue font_12 font_400 mb-0">View All</Link>
                    </div>
                    <div className="row gx-4 gy-3">
                        <div className="col-6">
                            <div className="grocery_card text-center h-100">
                                <img src="/assets/img/home/backry.png" alt="tomato" className="img-fluid" />
                                <h5 className="roboto font_700 grocery_heading text_dark mb-0">₹ 100 (KG)</h5>
                                <p className="mb-4 pb-1 font_12 font_400 text_dark">Roma Tomato</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="grocery_card text-center h-100">
                                <img src="/assets/img/home/backry.png" alt="tomato" className="img-fluid" />
                                <h5 className="roboto font_700 grocery_heading text_dark mb-0">₹ 100 (KG)</h5>
                                <p className="mb-4 pb-1 font_12 font_400 text_dark">Roma Tomato</p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between mb-3 mt-4">
                        <h3 className='heading_1 font_700 mb-0'>Meet & Seafood</h3>
                        <Link to={""} className="text_blue font_12 font_400 mb-0">View All</Link>
                    </div>
                    <div className="row gx-4 gy-3">
                        <div className="col-6">
                            <div className="grocery_card text-center h-100">
                                <img src="/assets/img/home/safefood.png" alt="tomato" className="img-fluid" />
                                <h5 className="roboto font_700 grocery_heading text_dark mb-0">₹ 100 (KG)</h5>
                                <p className="mb-4 pb-1 font_12 font_400 text_dark">Roma Tomato</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="grocery_card text-center h-100">
                                <img src="/assets/img/home/safefood2.png" alt="tomato" className="img-fluid" />
                                <h5 className="roboto font_700 grocery_heading text_dark mb-0">₹ 100 (KG)</h5>
                                <p className="mb-4 pb-1 font_12 font_400 text_dark">Roma Tomato</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}