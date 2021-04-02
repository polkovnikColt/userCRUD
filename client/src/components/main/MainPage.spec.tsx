import React from "react";
import {screen} from '@testing-library/react';
import {renderWithRedux} from "../../testUtils/reduxRender";
import {redefineMatchMedia} from "../../testUtils/beforeEach";
import {MainPage} from "./MainPage";

const initState = {
    user: {
        userCredential: {
            id:0,
            email:"email",
            password:"password",
            role:"user"
        },
        userProfiles: [{
            id:0,
            user:0,
            name:"name",
            city:"city",
            gender:"male",
            birthday:"12-03-2001",
            age:20,
            role:"user"
        }]
    }
}

describe('main page test', () => {

    beforeEach(redefineMatchMedia)
    const element = () => <MainPage/>

    it('table test', () => {
        renderWithRedux(element(),initState);
        const table = screen.getByRole('table');
        expect(table).toBeInTheDocument();
        // expect(table).toHaveLength(1);
    })

    it('manipulator test', () => {
        renderWithRedux(element());
    })

})