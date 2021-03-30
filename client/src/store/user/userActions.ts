import {ProfileInterface, UserInterface} from "../../types/types";
import {Dispatch} from "react";
import axios from '../../axios/initAxios'
import {
    ChangeCredentialType,
    CreateAccountType, DeleteProfileType, DeleteUserType, LoadAllProfilesType, LoadAllUsersType,
    LoadProfilesType, LoginType,
    RegistrationType, UpdateToAdminType
} from "./userActionsTypes";

export const LOAD_USER_PROFILES = "LOAD_USER_PROFILES";
export const LOGIN = "LOGIN";
export const CREATE_ACCOUNT = "CREATE_ACCOUNT";
export const CHANGE_CREDENTIAL = "CHANGE_CREDENTIAL";
export const REGISTRATION = "REGISTRATION";
export const DELETE_PROFILE = "DELETE_PROFILE";
export const UNLOG = "UNLOG";
export const LOGIN_ON_LOAD = "LOGIN_ON_LOAD";
export const LOAD_ALL_PROFILES = "LOAD_ALL_PROFILES";
export const LOAD_ALL_USERS = "LOAD_ALL_USERS";
export const UPDATE_TO_ADMIN = "UPDATE_TO_ADMIN";
export const DELETE_USER = "DELETE_USER";

export const loadProfiles = (user: UserInterface | null) => {
    return async (dispatch: Dispatch<LoadProfilesType>) => {
        try {
            const response = await axios.get(`/profile/userProfile/${user?.id}`);
            dispatch({
                type: LOAD_USER_PROFILES,
                payload: response.data
            })
        } catch (e) {
            alert("Cannot load profiles")
        }
    }
}

export const loadAllUsers = () => {
    return async (dispatch: Dispatch<LoadAllUsersType>) => {
        const response = await axios.get('/user');
        dispatch({
            type: LOAD_ALL_USERS,
            payload: response.data
        })
    }
}

export const loginOnLoad = () => {
    return async (dispatch: Dispatch<LoginType>) => {
        try {
            const response = await axios.get('/login/load');
            console.log(response.data);
            dispatch({
                type: LOGIN,
                payload: response.data.user
            })
        } catch (e) {
            alert("Please login");
        }
    }
}

export const unlog = () => {
    localStorage.removeItem('token');
    return {
        type: UNLOG,
        payload: null
    }
}

export const login = (user: UserInterface) => {
    return async (dispatch: Dispatch<LoginType>) => {
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

export const loadAllProfiles = () => {
    return async (dispatch: Dispatch<LoadAllProfilesType>) => {
        try {
            const response = await axios.get('profile/all');
            dispatch({
                type: LOAD_ALL_PROFILES,
                payload: response.data
            })
        } catch (e) {
            alert("Can't load profiles")
        }
    }
}

export const registration = (credential: UserInterface) => {
    return async (dispatch: Dispatch<RegistrationType>) => {
        try {
            const response = await axios.post("/login/registration", credential);
            console.log(response.data)
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
        try {
            const response = await axios.delete(`/profile/${id}`);
            if (response.status === 200) {
                alert("Profile was deleted");
            }
            dispatch({
                type: DELETE_PROFILE,
                payload: id
            })
        } catch (e) {
            alert("Something went wrong")
        }
    }
}

export const deleteUser = (id:number) => {
    return async (dispatch: Dispatch<DeleteUserType>) => {
        try {
            const response = axios.delete(`user/${id}`);
            dispatch({
                type: DELETE_USER,
                payload: id
            })
        } catch (e) {
            alert("Can't delete user profile")
        }
    }
}

export const updateToAdmin = (id: number,) => {
    return async (dispatch: Dispatch<UpdateToAdminType>) => {
        try {
            const response = await axios.put(`user/${id}`, {role: 'admin'});
            dispatch({
                type: UPDATE_TO_ADMIN,
                payload: {id: id, role: 'admin'}
            })
        } catch (e) {
            alert("Can't update this user")
        }
    }
}

export const changeCredential = (credential: ProfileInterface) => {
    return async (dispatch: Dispatch<ChangeCredentialType>) => {
        console.log(credential)
        try {
            const response = await axios.put(`/profile/${credential.id}`,
                credential);
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
