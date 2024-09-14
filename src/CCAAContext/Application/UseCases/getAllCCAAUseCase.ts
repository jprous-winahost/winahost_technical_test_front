import {CCAA} from "../../Domain/CCAA";
import {CCAAJsonRepository} from "../../Infrastructure/Database/CCAAJsonRepository";

export const getAllCCAAFromJson = (): CCAA[] => {
    return CCAAJsonRepository.getAll();
}