import {createMemoryHistory} from "history";
import {render} from "@testing-library/react";
import { Router } from "react-router-dom";
import React from "react";

export const renderWithRouter = (component:JSX.Element) => {
    const history = createMemoryHistory()
    return {
        ...render (
            <Router history={history}>
                {component}
                </Router>
        )
    }
}
