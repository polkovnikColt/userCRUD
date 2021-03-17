import {Reducer} from "redux";

const initState = {
    allProfiles: [],
    adminProfiles: [],
}

export const adminReducer: Reducer = (state = initState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}