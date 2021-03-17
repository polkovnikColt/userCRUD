import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from "./user/userReducer";
import {UserInterface} from "../types/types";

export type userState = {
    userProfiles: UserInterface[]
}

export interface RootState {
    user: userState
}

export const store = createStore(
    combineReducers({
        user: userReducer
    }),
    applyMiddleware(thunk));