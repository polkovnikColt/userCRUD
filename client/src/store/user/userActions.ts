import {ProfileInterface, UserInterface} from "../../types/types";

export const LOAD_USER_PROFILES = "LOAD_USER_PROFILES";
export const LOGIN = "LOGIN";
export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const CHANGE_CREDENTIAL = "CHANGE_CREDENTIAL";

export const loadUser = () => {
    return {
        type: LOAD_USER_PROFILES, payload: []
    }
}

export const changeCredential = (credential:ProfileInterface) => {
    return {
        type: CHANGE_CREDENTIAL,
        payload: credential
    }
}

export const login = (user: UserInterface) => {
    return {type: LOGIN, payload: user};
}

export const createAccount = (profile:ProfileInterface) => {
    console.log(profile)
    return {type:CREATE_ACCOUNT, payload: profile};
}
