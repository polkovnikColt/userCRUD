import {ProfileInterface, UserInterface} from "../../types/types";
import {
    CHANGE_CREDENTIAL,
    CREATE_ACCOUNT,
    DELETE_PROFILE,
    LOAD_USER_PROFILES,
    LOGIN,
    REGISTRATION, UNLOG
} from "./userActions";

export type LoginAction = {
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