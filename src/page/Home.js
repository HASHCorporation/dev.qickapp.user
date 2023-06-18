import React from 'react';
import Header from '../component/Header';
import Search from '../component/Search';
import BazaarCard from '../component/BazaarCard';

import Slider from "react-slick";


export default function Home() {
    const settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 4.3,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="bg_body">
                <Header />
                <div className="home_container">
                    <Search />
                    {/* start Categories  */}
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
                    {/* end Categories  */}

                    {/* start card  */}
                    <BazaarCard />
                    {/* end card  */}

                    {/* start store section  */}
                    <div className='mt-4'>
                        <h4 className='heading_1 font_700 mb-4'>Your neighbors love to order from these stores</h4>
                    </div>

                    <div className='overflow-hidden'>
                        <Slider {...settings}>
                            <div>
                                <div className='slider_round'>
                                    <img src='/assets/img/home/slider.png' alt='img' />
                                </div>
                                <div>
                                    <h3 className="font_700 roboto font_16 mt-2">Big Bazaar</h3>
                                </div>
                            </div>
                            <div>
                                <div className='slider_round'>
                                    <img src='/assets/img/home/slider.png' alt='img' />
                                </div>
                                <div>
                                    <h3 className="font_700 roboto font_16 mt-2">Big Bazaar</h3>
                                </div>
                            </div>
                            <div>
                                <div className='slider_round'>
                                    <img src='/assets/img/home/slider2.png' alt='img' />
                                </div>
                                <div>
                                    <h3 className="font_700 roboto font_16 mt-2">Big Bazaar</h3>
                                </div>
                            </div>
                            <div>
                                <div className='slider_round'>
                                    <img src='/assets/img/home/slider2.png' alt='img' />
                                </div>
                                <div>
                                    <h3 className="font_700 roboto font_16 mt-2">Big Bazaar</h3>
                                </div>
                            </div>
                            <div>
                                <div className='slider_round'>
                                    <img src='/assets/img/home/slider.png' alt='img' />
                                </div>
                                <div>
                                    <h3 className="font_700 roboto font_16 mt-2">Big Bazaar</h3>
                                </div>
                            </div>

                        </Slider>

                    </div>
                    {/* end store section  */}

                </div>
            </div>
        </>
    )
}