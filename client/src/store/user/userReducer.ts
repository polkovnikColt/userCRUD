import {UserState} from "../store";
import {
    CHANGE_CREDENTIAL,
    CREATE_ACCOUNT,
    DELETE_PROFILE,
    LOAD_ALL_PROFILES,
    LOAD_ALL_USERS,
    LOAD_USER_PROFILES,
    LOGIN,
    REGISTRATION,
    UNLOG,
    UPDATE_TO_ADMIN
} from "./userActions";
import {ProfileInterface, UserInterface} from "../../types/types";
import {
    ChangeCredentialType,
    CreateAccountType,
    DeleteProfileType,
    LoadAllProfilesType,
    LoadAllUsersType,
    LoadProfilesType,
    LoginType,
    RegistrationType,
    UnlogType,
    UpdateToAdminType
} from "./userActionsTypes";


const initState: UserState = {
    userCredential: null,
    userProfiles: [],
    allProfiles: [],
    allUsers: []
}

type ActionType = LoginType | RegistrationType | ChangeCredentialType | CreateAccountType
    | LoadProfilesType | DeleteProfileType | UnlogType | LoadAllProfilesType | LoadAllUsersType
    | UpdateToAdminType;

export const userReducer = (state = initState, action: ActionType) => {
    switch (action.type) {
        case DELETE_PROFILE:
            return {
                ...state,
                userProfiles:
                    state.userProfiles
                        .filter((profile: ProfileInterface) => profile.id !== action.payload),
                allProfiles:
                    state.allProfiles.filter((profile: ProfileInterface) => profile.id !== action.payload)
            };
        case UPDATE_TO_ADMIN:
            return {
                ...state, allUsers: state.allUsers.map((user: UserInterface) => {
                    if (user.id === action.payload.id) {
                        console.log(action.payload.role)
                        return {...user, role: action.payload.role}
                    }
                    console.log(user);
                    return user;
                })
            }
        case LOAD_ALL_USERS:
            return {...state, allUsers: action.payload}
        case LOAD_ALL_PROFILES:
            return {...state, allProfiles: action.payload}
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