import styled from "styled-components";

import SearchBar from "../common/searchbar/SearchBar";
import { SelectBox } from "../../styles/Component";

const CarSearchBar = () => {

    const optionList = [
        { value: "cnmCode", name: "치명코드" },
        { value: "vhctyAsortCode", name: "차종 코드" },
        { value: "registGrcCode", name: "등록 지역 코드" },
        { value: "dsplvlCode", name: "배기량 코드" },
        { value: "prye", name: "모델 연도" },
        { value: "sexdstn", name: "성별" },
        { value: "agrde", name: "연령대" },
    ]

    const CarSearchOption = [
        <SelectBox>
            {
                optionList.map((data, index) => (
                    <option key={index} value={data.value}>
                        {data.name}
                    </option>
                ))
            }
        </SelectBox>,
    ];

    return <SearchBar optionData={CarSearchOption}  />;
};

export default CarSearchBar;