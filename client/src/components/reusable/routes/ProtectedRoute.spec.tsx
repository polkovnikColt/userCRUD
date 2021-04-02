import React from 'react';
import {ProtectedRoute} from "./ProtectedRoute";
import {redefineMatchMedia} from "../../../testUtils/beforeEach";
import {renderWithRouter} from "../../../testUtils/routerRender";

describe('Protected route test', () => {

    beforeEach(redefineMatchMedia);

    const element = () => <ProtectedRoute
        component={React.Fragment}
        path={'/'}
        isAuth={true}/>

    it('protected route test', () => {
        renderWithRouter(element());
    })
})