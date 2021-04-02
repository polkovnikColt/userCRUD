import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {userReducer} from "./user/userReducer";
import {ProfileInterface, UserInterface} from "../types/types";
import {UserState} from "../types/types";

export interface RootState {
    user: UserState,
}

export const store = createStore(
    combineReducers({
        user: userReducer,
    }),
    applyMiddleware(thunk));