import { useState, useEffect } from "react";
import { CarListData } from "../../apis";

// 준비 중
import { Notice } from "../../components/common/layout";


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
            <Notice />
        </>
    );
};

export default CarView;