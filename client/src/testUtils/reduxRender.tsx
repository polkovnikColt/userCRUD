import React from 'react'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {Provider} from "react-redux";
import {render} from '@testing-library/react';
import {userReducer} from '../store/user/userReducer';

// const mockDispatch = jest.fn();
// jest.mock('react-redux', () => ({
//     useSelector: jest.fn(),
//     useDispatch: () => mockDispatch
// }));

const rootReducer = combineReducers({
        user: userReducer,
    }
)

export const renderWithRedux = (
    component: JSX.Element,
    initState = {}
) => {
   const store = createStore(
       rootReducer,
       initState || {},
       applyMiddleware(thunk));
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    }
}