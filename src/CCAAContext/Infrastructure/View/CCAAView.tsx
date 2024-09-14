import {getAllCCAAFromJson} from "../../Application/UseCases/getAllCCAAUseCase";
import React, {useEffect} from "react";
import {CCAA} from "../../Domain/CCAA";

const getAllCCAAData = () => {

    useEffect(() => {
        const getAllCCAAFromJsonData: CCAA[] = getAllCCAAFromJson();
        
        console.log(getAllCCAAFromJsonData);
    })

    return (<div>Implement the solution</div>);
}

export default getAllCCAAData;