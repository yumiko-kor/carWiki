import { useState, useEffect } from "react";
import { CarListData } from "../../apis";

// component
import Pagination from "../../components/common/pagination/Paginatioin";
import { CarViewTable, CarSearchBar, CarHeader } from "../../components/car-management";


const CarView = () => {

    // API 세팅 
    useEffect(() => {
        const token = process.env.GOV_API_KEY;

        const fetchData = async(token) => {
            await CarListData(token);
        }

        fetchData();
    },[])

    return (
        <>
            <CarHeader />
            {/* <CarSearchBar /> */}
            <CarViewTable />
        </>
    );
};

export default CarView;