import {ProfileInterface, UserInterface} from "../../types/types";
import {Dispatch} from "react";
import axios from '../../axios/initAxios'

export const LOAD_USER_PROFILES = "LOAD_USER_PROFILES";
export const LOGIN = "LOGIN";
export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const CHANGE_CREDENTIAL = "CHANGE_CREDENTIAL";
export const REGISTRATION = "REGISTRATION";

type LoginAction = {
    type: typeof LOGIN;
    payload: UserInterface;
}

type RegistrationType = {
    type: typeof REGISTRATION
    payload: UserInterface
}

export const registration = (credential: UserInterface) => {

    return async (dispatch: Dispatch<RegistrationType>) => {
        const token = await axios.post("/login/registration", {credential});
        localStorage.setItem('token', token.data);
        dispatch({
            type: REGISTRATION,
            payload: {...credential}
        })
    }
}

export const changeCredential = (credential: ProfileInterface) => {

    return async (dispatch: Dispatch<UserInterface>) => {

        return {
            type: CHANGE_CREDENTIAL,
            payload: credential
        }
    }
}

export const login = (user: UserInterface) => {

    return async (dispatch: Dispatch<LoginAction>) => {
        const token = await axios.post('/login', {user})
        console.log(token.data);
        localStorage.setItem("token", token.data);
        dispatch({
            type: LOGIN,
            payload: {
                ...user,
            }
        })
    };
}

export const createAccount = (profile: ProfileInterface) => {
    console.log(profile)
    return {type: CREATE_ACCOUNT, payload: profile};
}
