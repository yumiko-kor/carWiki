import { Axios } from "../utils/Axios";

// 자동차 검색 api 호출
export const CarListData = 
    async (token, registYy, registMt, vhctyAsortCode, registGrcCode, useFuelCode, cnmCode, prposSeNm, sexdstn, agrde, dsplvlCode, hmmdImpSeNm, prye) => 
    {
    try {
        const res = await Axios.get(
            `https://apis.data.go.kr/B553881/newRegistInfoService/newRegistInfoService?
            serviceKey=${token}
            &registYy=${registYy ? registYy : "2020"}
            &registMt=${registMt ? registMt : "02"}
            &vhctyAsortCode=${vhctyAsortCode ? vhctyAsortCode : "1"}
            &registGrcCode=${registGrcCode ? registGrcCode : "1"}
            &useFuelCode=${useFuelCode ? useFuelCode : "2"}
            &cnmCode=${cnmCode ? cnmCode : "003869"}
            &prposSeNm=${prposSeNm ? prposSeNm : "1"}
            &sexdstn=${sexdstn ? sexdstn : "%EB%82%A8%EC%9E%90"}
            &agrde=${agrde ? agrde : "3"}
            &dsplvlCode=${dsplvlCode ? dsplvlCode : "6"}
            &hmmdImpSeNm=${hmmdImpSeNm ? hmmdImpSeNm : "%EA%B5%AD%EC%82%B0"}
            &prye=${prye ? prye : "2020"}`
        )
        
        return res;
    }catch(e) {
        if(e instanceof Error) {
            throw new Error("CarListData Error", console.log(e));
        }
    }
}

// 자동차등록 집계 현황 -> 자동차 매매업 기준
export const CarRegistData = async(signgu_nm) => {
    
    try{
        const res = await Axios.get(
            `https://openapi.gg.go.kr/CarRegistration?SIGNGU_NM=${signgu_nm}`
            );
            

        return res.data;
    }catch(e) {
        if (e instanceof Error) {
            throw new Error("CarRegistData Error", console.log(e));
        }
    }
}


// json data api
export const CarJsonData = async(page_size) => {

    try {
        const res = await Axios.get(
            `http://localhost:9696/carlist?_limit=${page_size}`
        )

        return res.data;

    }catch(e) {
        if(e instanceof Error) {
            throw new Error("CarJsonData Error", e);
        }
    }

}