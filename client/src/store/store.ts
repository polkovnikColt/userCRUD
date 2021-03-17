import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from "./user/userReducer";
import {UserInterface} from "../types/types";
import {adminReducer} from "./admin/adminReducer";

export type userState = {
    userCredential: UserInterface | null,
    userProfiles: UserInterface[]
}


export interface RootState {
    user: userState,
    admin: userState
}

export const store = createStore(
    combineReducers({
        user: userReducer,
        admin: adminReducer
    }),
    applyMiddleware(thunk));