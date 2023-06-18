import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../component/Header";
import SearchIcon from '@mui/icons-material/Search';
import { Drawer } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


export default function ProductDetail() {
    const [product, setProduct] = useState()
    const [cart, setCart] = useState()
    return (
        <>

            <div className="bg_body">
                <Header />
                <div className="home_container">
                    <button className="btn btn-primary w-100 quick_button suport_btn text-center h_60" onClick={() => setProduct(true)}>Order Details</button>
                    <h5 className="roboto text_dark font_14 font_700 text-center mt-4">
                        Would you like to send a tip for the delivery?
                    </h5>
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary quick_button suport_btn text-center dis_btn">5%</button>
                        <button className="btn btn-primary quick_button suport_btn text-center dis_btn">10%</button>
                        <button className="btn btn-primary quick_button suport_btn text-center dis_btn">15%</button>
                    </div>
                    <p className="text_gray font_12 font_400 text-uppercase mt-3">Choose your payment method</p>
                    <select className="form-select w-50 qick_lable text-capitalize w-100" aria-label="Default select example">
                        <option selected="">Credit Card</option>
                        <option value={1}>Credit Card</option>
                        <option value={2}>Credit Card</option>
                        <option value={3}>Credit Card</option>
                    </select>
                    <p className="roboto text_dark font_10 font_400 text-center mt-3 px-4 pb-5">
                        *All tips go to the shop. The shop is obliged to
                        distribute the tip to the drivers. Based on your
                        order total (₹250.60).
                    </p>

                    <div className="d-flex justify-content-between align-items-center mt-5">
                        <div className="road_line road_active">
                            <span></span>
                            <p className="mb-0 font_10 font_700 text_dark">Accepted</p>
                        </div>
                        <div className="road_line road_active">
                            <span></span>
                            <p className="mb-0 font_10 font_700 text_dark">Prepared</p>
                        </div>
                        <div className="road_line road_active">
                            <span></span>
                            <p className="mb-0 font_10 font_700 text_dark">Shipped</p>
                        </div>
                        <div className="road_line road_stop">
                            <span></span>
                            <p className="mb-0 font_10 font_700 text_dark">In Transit</p>
                        </div>
                        <div className="road_line">
                            <span></span>
                            <p className="mb-0 font_10 font_700 text_dark">Delivered</p>
                        </div>
                        <div className="road_line">
                            <span></span>
                            <p className="mb-0 font_10 font_400 text_dark">Completed</p>
                        </div>
                    </div>

                </div>
                <div className="home_container">

                <div className="bazaar_card">
                    <div className="d-flex">
                        <div className="baz_profile me-2">
                            <img src="assets/img/home/big_bazaar.svg" alt="big bazaar" />
                        </div>
                        <div className="d-flex justify-content-between w-100">
                            <div>
                                <h3 className="font_700 roboto font_16 mb-2">Big Bazaar</h3>
                                <div className="d-flex">
                                    <p class="text_dark roboto font_14 me-1 mb-0 font_700">Home</p>
                                    <span class="badge bg-primary baz_badget">Delivery</span>
                                </div>
                            </div>
                            <div>
                                <p className="mb-0 roboto font_14 font_700 text_blue">ORD0000000001</p>
                                <p className="mb-0 roboto font_14 font_700 text_blue">₹ 872.49</p>
                            </div>
                        </div>
                    </div>
                    <p className="ms-5 mt-2 ps-2 font_12 font_400 text_dark roboto">Yesterday, 08:04 PM</p>
                    <div className="border-top d-flex pt-4">
                        <div className="baz_profile me-2">
                            <img src="/assets/img/product/small.png" alt="big bazaar" />
                        </div>
                        <div>
                            <h6 className="mb-0 roboto font_12 font_700">Gourmet Garden™ Garlic Stir-In Paste</h6>
                            <h5 className="mb-0 roboto font_12 font_400">40g</h5>
                            <p className="mb-0 roboto font_12 font_700">₹ 840</p>
                        </div>
                    </div>
                    <div className="btn-group-sm mt-4" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-secondary">
                            -
                        </button>
                        <button type="button" className="btn btn-outline-secondary">
                            2
                        </button>
                        <button type="button" className="btn btn-outline-secondary">
                            +
                        </button>
                    </div>
                    <div className="border-top pt-3 mt-3">
                        <div className="d-flex justify-content-between">
                            <p className="mb-0 text_dark font_12 font_400 roboto">Total</p>
                            <h4 className="text_dark font_12 font_700 roboto">₹ 2520.00</h4>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="mb-0 text_dark font_12 font_400 roboto">Delivery</p>
                            <h4 className="text_dark font_12 font_700 roboto">₹ 100.00</h4>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="mb-0 text_dark font_12 font_400 roboto">GST</p>
                            <h4 className="text_dark font_12 font_700 roboto">₹ 380.00</h4>
                        </div>
                    </div>
                    <div className="border-top pt-4">
                        <div className="d-flex justify-content-between">
                            <p className="mb-0 text_dark font_12 font_700 roboto">Sub total</p>
                            <h4 className="text_dark font_12 font_700 roboto">₹ 3000.00</h4>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p className="mb-0 text_dark font_12 font_700 roboto">Paid with Apple pay</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-6 mb-3">
                        <button className="btn btn-primary quick_button suport_btn text-center px-3 w-100">
                            Order details</button>
                    </div>
                    <div className="col-6 mb-3">
                        <button className="btn btn-primary quick_button suport_btn text-center px-3 w-100">
                            Track order</button>
                    </div>
                    <div className="col-6 mb-3">
                        <button className="btn btn-primary quick_button suport_btn text-center px-3 w-100">
                            Cancel order</button>
                    </div>
                    <div className="col-6 mb-3">
                        <button className="btn btn-primary quick_button suport_btn text-center px-3 w-100">
                            Return items</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-primary quick_button suport_btn text-center px-3 w-100">
                            Contact store</button>
                    </div>
                </div>








                <Drawer
                    anchor='bottom'
                    open={product}
                        onClose={() => setProduct(false)}
                        className="drover"
                >
                    <div className="pt-3 px-3">
                        <CloseIcon className="pointer" onClick={() => setProduct(false)} />
                    </div>
                    <div className="px-3">
                        <div className="text-center pt-5 px-3">
                            <img src="/assets/img/product/product.png" alt="product" />
                            <div className="d-flex justify-content-between mt-3">
                                <img src="/assets/img/product/small.png" className="img-fluid" />
                                <img src="/assets/img/product/small2.png" className="img-fluid" />
                                <img src="/assets/img/product/small2.png" className="img-fluid" />
                                <img src="/assets/img/product/small3.png" className="img-fluid" />
                                <img src="/assets/img/product/small4.png" className="img-fluid" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text_dark roboto font_16 font_700 mt-4 mb-0">Gourmet Garden™ Garlic Stir-In Paste</h1>
                            <p className="text_dark font_18 font_400 mb-3 roboto">40g</p>
                        </div>
                        <h6 className="roboto font_18 font_700 text_dark">₹ 420.00</h6>
                        <div className="d-flex align-items-center justify-content-between">
                            <select className="form-select w-50 qick_lable text-capitalize text-center text_dark py-2 mb-0 me-1" aria-label="Default select example">
                                <option selected="">1</option>
                                <option value={1}>2</option>
                                <option value={2}>3</option>
                                <option value={3}>4</option>
                            </select>
                            <button className="btn btn-primary btn-sm btn_small w-50 ms-1 py-2" onClick={() => setCart(true)}>Add to cart</button>
                        </div>
                        <div className="mt-3">
                            <h6 className="roboto font_18 font_400 text_dark">Details</h6>
                            <p className="font_14 font_400 text_dark roboto">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <h3 className='heading_1 font_700 mb-0'>Related items</h3>
                            <Link to={""} className="text_blue font_12 font_400 mb-0">View All</Link>
                        </div>
                        <div className="row gx-4 gy-3 mb-5">
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
                        <div>
                            <h5 className="text_dark font_17 font_700 roboto d-flex">Reviews
                                <div>
                                    <Rating name="no-value" value={null} className="w-100 ms-3" />
                                </div>
                            </h5>
                            <div className="d-flex align-items-center my-3">
                                <h6 className="roboto font_16 font_700 text_dark">Sort By</h6>
                                <select className="form-select w-50 ms-3 qick_lable text-capitalize" aria-label="Default select example">
                                    <option selected="">Rating top to bottom</option>
                                    <option value={1}>Rating top to bottom</option>
                                    <option value={2}>Rating top to bottom</option>
                                    <option value={3}>Rating top to bottom</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h5 className="text_dark font_14 font_700 roboto mb-0 mt-1">User 1</h5>
                                <div>
                                    <Rating name="no-value" value={null} className="w-100" />
                                </div>
                            </div>
                            <p className="roboto font_12 font_400 text_gray border-bottom pb-2">Lorem ipsum dolor sit amet, consectetur adipiscingelit,
                                sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Orci ac auctor augue mauris Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Orci ac auctor augue mauris
                            </p>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between">
                                <h5 className="text_dark font_14 font_700 roboto mb-0 mt-1">User 1</h5>
                                <div>
                                    <Rating name="no-value" value={null} className="w-100" />
                                </div>
                            </div>
                            <p className="roboto font_12 font_400 text_gray border-bottom pb-2">Lorem ipsum dolor sit amet, consectetur adipiscingelit,
                                sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Orci ac auctor augue mauris Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Orci ac auctor augue mauris
                            </p>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between">
                                <h5 className="text_dark font_14 font_700 roboto mb-0 mt-1">User 1</h5>
                                <div>
                                    <Rating name="no-value" value={null} className="w-100" />
                                </div>
                            </div>
                            <p className="roboto font_12 font_400 text_gray border-bottom pb-2">Lorem ipsum dolor sit amet, consectetur adipiscingelit,
                                sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Orci ac auctor augue mauris Lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Orci ac auctor augue mauris
                            </p>
                        </div>

                    </div>
                </Drawer>

                <Drawer
                    anchor='bottom'
                    open={cart}
                        onClose={() => setCart(false)}
                        className="drover"
                >
                    <div className="position-relative">
                        <CloseIcon className="close_icone pointer" onClick={() => setCart(false)} />

                        <div className="px-3 py-4 text-center">
                            <h4 className="heading_1 mb-0">Cart</h4>
                        </div>
                    </div>
                    <div className="bg_body home_container">
                        <div className="bazaar_card">
                            <div className="d-flex">
                                <div className="baz_profile me-2">
                                    <img src="assets/img/home/big_bazaar.svg" alt="big bazaar" />
                                </div>
                                <div className="d-flex justify-content-between w-100">
                                    <div>
                                        <h3 className="font_700 roboto font_16 mb-2">Big Bazaar</h3>
                                        <div className="d-flex">
                                            <span class="badge bg-primary baz_badget">Delivery</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="mb-0 roboto font_14 font_700 text_blue">₹ 872.49</p>
                                    </div>
                                </div>
                            </div>
                            <p className="ms-5 mt-2 ps-2 font_12 font_400 text_blue roboto">Aprox. 2 hours</p>
                            <div className="border-top d-flex pt-4">
                                <div className="baz_profile me-2">
                                    <img src="/assets/img/product/small.png" alt="big bazaar" />
                                </div>
                                <div className="d-flex w-100 justify-content-between">
                                    <div>
                                        <h6 className="mb-0 roboto font_12 font_700">Gourmet Garden™ Garlic Stir-In Paste</h6>
                                        <h5 className="mb-0 roboto font_12 font_400">40g</h5>
                                        <div className="btn-group-sm mt-2" role="group" aria-label="Basic outlined example">
                                            <button type="button" className="btn btn-outline-secondary">
                                                -
                                            </button>
                                            <button type="button" className="btn btn-outline-secondary">
                                                2
                                            </button>
                                            <button type="button" className="btn btn-outline-secondary">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <p className="mb-0 roboto font_12 font_700">₹ 840</p>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between mb-3 mt-3">
                                    <h3 className='heading_1 font_700 mb-0'>You might also like</h3>
                                    <Link to={""} className="text_blue font_12 font_400 mb-0">View All</Link>
                                </div>
                                <div className="row gx-4 gy-3 mb-3">
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
                                <div className="d-flex justify-content-between mb-3 mt-3">
                                    <h3 className='heading_1 font_700 mb-0'>Frequently bought together</h3>
                                    <Link to={""} className="text_blue font_12 font_400 mb-0">View All</Link>
                                </div>
                                <div className="row gx-4 gy-3 mb-3">
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
                            </div>
                            <Link to={"/home"} className="btn btn-primary w-100 text-center suport_btn ps-2 mt-3 py-2">



                                Proceed to Checkout</Link>
                        </div>
                    </div>
                </Drawer>
            </div>
            </div>
            
        </>
    )
}