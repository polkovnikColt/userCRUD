import {Reducer} from "redux";
import {userState} from "../store";
import {CREATE_ACCOUNT, LOAD_USER_PROFILES, LOGIN} from "./userActions";


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
        default: return state;
    }
}