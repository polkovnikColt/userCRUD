import {Reducer} from "redux";
import {UserState} from "../store";
import {CHANGE_CREDENTIAL, CREATE_ACCOUNT, LOAD_USER_PROFILES, LOGIN, REGISTRATION} from "./userActions";
import {ProfileInterface} from "../../types/types";


const initState: UserState = {
    userCredential: null,
    userProfiles: [],
}

export const userReducer: Reducer = (state = initState, action) => {
    switch (action.type) {
        case REGISTRATION:
            return {...state, userCredential:action.payload}
        case LOAD_USER_PROFILES:
            return {...state, userProfiles: action.payload};
        case LOGIN:
            return {...state, userCredential: action.payload};
        case CREATE_ACCOUNT:
            return {...state, userProfiles: [...state.userProfiles, action.payload]}
        case CHANGE_CREDENTIAL:
            return {
                ...state, userProfiles:
                    state.userProfiles.map((profile: ProfileInterface) => {
                    if (profile.name === action.payload.name) {
                        return {...profile, profile: action.payload}
                    }

                })
            }

        default:
            return state;
    }
}