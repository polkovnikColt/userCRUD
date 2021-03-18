import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from "./user/userReducer";
import {ProfileInterface, UserInterface} from "../types/types";

export type userState = {
    userCredential: UserInterface | null,
    userProfiles: ProfileInterface[]
}

export interface RootState {
    user: userState,
}

export const store = createStore(
    combineReducers({
        user: userReducer,
    }),
    applyMiddleware(thunk));