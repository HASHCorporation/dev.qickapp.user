import React from "react";
import Header from "../component/Header";
import Search from "../component/Search";
import BazaarCard from "../component/BazaarCard";
import OrderCard from "../component/OrderCard";

export default function YourOrder() {
    return (
        <>
            <div className="bg_body">
                <Header />
                <div className="home_container">
                    <Search />
                    <div className="mt-4">
                        <OrderCard />
                    </div>
                </div>
            </div>


        </>
    )
}