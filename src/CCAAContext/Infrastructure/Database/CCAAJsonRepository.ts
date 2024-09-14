import {CCAARepository} from "../../Domain/CCAARepository";
import {CCAA} from "../../Domain/CCAA";
import {CCAAResponse} from "../../Application/Response/CCAAResponse";

import ccaaJsonData from './../../Domain/CCAAData/ccaa.json';

export const CCAAJsonRepository: CCAARepository = {
    getAll: () => {
        let ccaaCollection: CCAA[] = [];
        ccaaJsonData.map((ccaaData: {parent_code:string, label: string, code: string}): void => {

            const CCAAResponseData: CCAAResponse = new CCAAResponse(
                parseInt(ccaaData.parent_code),
                ccaaData.label,
                parseInt(ccaaData.code)
            );

            ccaaCollection.push(CCAAResponseData.getCCAA());
        });
        return ccaaCollection;
    }
}