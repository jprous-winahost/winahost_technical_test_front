import {CCAA} from "../../Domain/CCAA";

export class CCAAResponse {
    private readonly parentCode: number;
    private readonly name: string;
    private readonly code: number;

    constructor(parentCode: number, name: string, code: number) {
        this.parentCode = parentCode;
        this.name = name;
        this.code = code;
    }

    getCCAA = (): CCAA => {
        return {
            parentCode: this.parentCode,
            name: this.name,
            code: this.code
        };
    }
}