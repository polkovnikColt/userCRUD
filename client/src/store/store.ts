import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from "./user/userReducer";
import {ProfileInterface, UserInterface} from "../types/types";

export type UserState = {
    userCredential: UserInterface | null,
    userProfiles: ProfileInterface[]
    allProfiles: ProfileInterface[]
    allUsers:[]
}

export interface RootState {
    user: UserState,
}

export const store = createStore(
    combineReducers({
        user: userReducer,
    }),
    applyMiddleware(thunk));