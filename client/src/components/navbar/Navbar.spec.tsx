import React from 'react';
import {renderWithRedux} from "../../testUtils/reduxRender";
import {Navbar} from "./Navbar";
import {redefineMatchMedia} from "../../testUtils/beforeEach";
import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Link} from "react-router-dom";

const initState = {
    user: {
        userCredential: {
            id: 0,
            email: "email",
            password: "password",
            role: "user"
        }
    }
}

jest.mock('react-router-dom', () => ({
    Link: () => <div data-testid="link"/>,
}))

describe('test navbar', () => {

    beforeEach(redefineMatchMedia)

    const element = () =>  <Navbar/>;

    it('test button to be null', () => {
        renderWithRedux(element());
        const button = screen.queryByRole('button');
        expect(button).toBeNull();
    })

    it('test link', () => {
        renderWithRedux(element());
        const link = screen.getByTestId('link');
        expect(link).toBeInTheDocument();
    })

    it('test button present', () => {
        renderWithRedux(element(),initState);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })

})