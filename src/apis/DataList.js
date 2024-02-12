import { Axios } from "../utils/Axios";

export const CarListData = async (params) => {
    const token = process.env.REACT_APP_API_KEY;

    try {
        const res = await Axios.get({
            header: { params }
        })
        console.log("성공", res);
        return res;
    }catch(e) {
        console.log("오류: ", e);
    }
}