import {UserState} from "../store";
import {
    CHANGE_CREDENTIAL,
    CREATE_ACCOUNT,
    DELETE_PROFILE,
    LOAD_USER_PROFILES,
    LOGIN,
    REGISTRATION, UNLOG
} from "./userActions";
import {ProfileInterface} from "../../types/types";
import {
    ChangeCredentialType,
    CreateAccountType,
    DeleteProfileType,
    LoadProfilesType,
    LoginAction,
    RegistrationType, UnlogType
} from "./userActionsTypes";


const initState: UserState = {
    userCredential: null,
    userProfiles: [],
}

type ActionType = LoginAction | RegistrationType | ChangeCredentialType | CreateAccountType
    | LoadProfilesType | DeleteProfileType | UnlogType;

export const userReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case DELETE_PROFILE:
            return {
                ...state, userProfiles:
                    state.userProfiles
                        .filter((profile: ProfileInterface) => profile.id !== action.payload)
            };
        case UNLOG:
            return {...state, userCredential: action.payload}
        case LOAD_USER_PROFILES:
            return {...state, userProfiles: action.payload};
        case REGISTRATION:
            return {...state, userCredential: action.payload};
        case LOGIN:
            return {...state, userCredential: action.payload};
        case CREATE_ACCOUNT:
            return {...state, userProfiles: [...state.userProfiles, action.payload]};
        case CHANGE_CREDENTIAL:
            return {
                ...state, userProfiles:
                    state.userProfiles.map((profile: ProfileInterface) => {
                        if (profile.name === action.payload.name) {
                            return {...profile, ...action.payload};
                        }
                        return profile;
                    })
            };

        default:
            return state;
    }
}