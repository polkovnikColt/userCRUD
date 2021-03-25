import {ProfileInterface, UserInterface} from "../../types/types";
import {Dispatch} from "react";
import axios from '../../axios/initAxios'
import {
    ChangeCredentialType,
    CreateAccountType, DeleteProfileType,
    LoadProfilesType,
    LoginAction,
    RegistrationType
} from "./userActionsTypes";

export const LOAD_USER_PROFILES = "LOAD_USER_PROFILES";
export const LOGIN = "LOGIN";
export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const CHANGE_CREDENTIAL = "CHANGE_CREDENTIAL";
export const REGISTRATION = "REGISTRATION";
export const DELETE_PROFILE = "DELETE_PROFILE";
export const UNLOG = "UNLOG";

export const loadProfiles = (user: UserInterface | null) => {
    return async (dispatch: Dispatch<LoadProfilesType>) => {
        console.log(localStorage.getItem('token'));
        try {
            const response = await axios.get(`/profile/${user?.id}`);
            dispatch({
                type: LOAD_USER_PROFILES,
                payload: response.data
            })
        } catch (e) {

        }
    }
}

export const unlog = () => {
    localStorage.clear();
    return {
        type: UNLOG,
        payload: null
    }
}

export const login = (user: UserInterface) => {
    return async (dispatch: Dispatch<LoginAction>) => {
        try {
            const response = await axios.post('/login', user);
            localStorage.setItem("token", response.data.token);
            dispatch({
                type: LOGIN,
                payload: response.data.user
            })
        } catch (e) {
            alert("No such user found");
        }
    };
}

export const registration = (credential: UserInterface) => {

    return async (dispatch: Dispatch<RegistrationType>) => {
        localStorage.clear();
        try {
            const response = await axios.post("/login/registration", credential);
            localStorage.setItem('token', response.data.token);
            dispatch({
                type: REGISTRATION,
                payload: credential
            });
        } catch (e) {
            alert("User with this credentials already exists");
        }
    }
}

export const deleteProfile = (id: number) => {
    return async (dispatch: Dispatch<DeleteProfileType>) => {
        console.log(id)
        const response = await axios.delete(`/profile/${id}`);
        if (response.status === 200) {
            alert("Profile was deleted");
        }
        dispatch({
            type: DELETE_PROFILE,
            payload: id
        })
    }
}

export const changeCredential = (credential: ProfileInterface) => {
    return async (dispatch: Dispatch<ChangeCredentialType>) => {
        try {
            const response = await axios.put(`/profile/${credential.id}`,
                credential);
            console.log(response)
            if (response.status === 200) {
                alert("Changes has been committed");
            }
            dispatch({
                type: CHANGE_CREDENTIAL,
                payload: credential
            })
        } catch (e) {

        }
    }
}

export const createAccount = (profile: ProfileInterface) => {
    return async (dispatch: Dispatch<CreateAccountType>) => {
        const response = await axios.post('/profile', profile);
        dispatch({
            type: CREATE_ACCOUNT,
            payload: response.data
        })
    };
}
