import {Reducer} from "redux";
import {userState} from "../store";
import {LOAD_USER_PROFILES} from "./userActions";


const initState:userState = {
   userProfiles: [],
}

export const userReducer:Reducer = (state = initState, action) => {
    switch (action.type){
        case LOAD_USER_PROFILES:
            return {...state, userProfiles: action.payload};
        default: return state;
    }
}