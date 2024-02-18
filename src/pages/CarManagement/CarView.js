import { useState, useEffect } from "react";
import { CarListData } from "../../apis";
import PageReturn from "../../utils/PageReturn";

// component
import Pagination from "../../components/common/pagination/Paginatioin";
import { CarHeader, CarViewTable } from "../../components/car-management";


const CarView = () => {
    // 토큰 확인
    PageReturn();

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
            <CarViewTable />
        </>
    );
};

export default CarView;