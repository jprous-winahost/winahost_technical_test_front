import {CCAA} from "./CCAA";

export interface CCAARepository {
    getAll: () => CCAA[]
}