import {ProfileInterface, UserInterface} from "../../types/types";
import {
    CHANGE_CREDENTIAL,
    CREATE_ACCOUNT,
    DELETE_PROFILE, DELETE_USER, LOAD_ALL_PROFILES, LOAD_ALL_USERS,
    LOAD_USER_PROFILES,
    LOGIN, LOGIN_ON_LOAD,
    REGISTRATION, UNLOG, UPDATE_TO_ADMIN
} from "./userActions";

export type LoginType = {
    type: typeof LOGIN
    payload: UserInterface
}

export type RegistrationType = {
    type: typeof REGISTRATION
    payload: UserInterface
}

export type ChangeCredentialType = {
    type: typeof CHANGE_CREDENTIAL
    payload: ProfileInterface
}

export type CreateAccountType = {
    type: typeof CREATE_ACCOUNT
    payload: ProfileInterface
}

export type LoadProfilesType = {
    type: typeof LOAD_USER_PROFILES
    payload: ProfileInterface[]
}

export type DeleteProfileType = {
    type: typeof DELETE_PROFILE
    payload: number
}
export type UnlogType = {
    type: typeof UNLOG
    payload: null
}

export type LoadAllProfilesType = {
    type: typeof LOAD_ALL_PROFILES
    payload: ProfileInterface[]
}

export type LoadAllUsersType = {
    type: typeof LOAD_ALL_USERS
    payload: UserInterface[]
}

export type UpdateToAdminType = {
    type: typeof UPDATE_TO_ADMIN
    payload: {id:number,role:string}
}

export type DeleteUserType ={
    type: typeof DELETE_USER
    payload:number
}