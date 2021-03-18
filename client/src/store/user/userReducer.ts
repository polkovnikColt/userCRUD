import {Reducer} from "redux";
import {userState} from "../store";
import {CHANGE_CREDENTIAL, CREATE_ACCOUNT, LOAD_USER_PROFILES, LOGIN} from "./userActions";
import {ProfileInterface} from "../../types/types";


const initState:userState = {
   userCredential: null,
   userProfiles: [],
}

export const userReducer:Reducer = (state = initState, action) => {
    switch (action.type){
        case LOAD_USER_PROFILES:
            return {...state, userProfiles: action.payload};
        case LOGIN:
            return {...state, userCredential: action.payload};
        case CREATE_ACCOUNT:
            return {...state, userProfiles: [...state.userProfiles, action.payload]}
        case CHANGE_CREDENTIAL:
            return {...state, userCredential: state.userProfiles.map((profile:ProfileInterface) => {
                 if (profile.name === action.payload.name){
                    return {...profile, profile: action.payload}
                 }

                })}

            return state;
    }
}