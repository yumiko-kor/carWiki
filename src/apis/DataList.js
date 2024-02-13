import { Axios } from "../utils/Axios";

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
        console.log("성공", res.data);
        return res;
    }catch(e) {
        console.log("오류: ", e);
    }
}