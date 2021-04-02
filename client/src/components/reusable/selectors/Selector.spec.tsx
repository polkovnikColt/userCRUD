import React from 'react';
import {render, screen, fireEvent, act} from '@testing-library/react';
import {Selector} from "./Selector";
import {redefineMatchMedia} from "../../../testUtils/beforeEach";
import userEvent from "@testing-library/user-event";

describe('selector test', () => {

    beforeEach(redefineMatchMedia)

    const onChange = jest.fn();
    const elementWithHandler = () => <Selector
        message="select"
        name='gender'
        values={['male', 'female']}
        changeHandler={onChange}
    />;
    const elementWithoutHandler = () => <Selector
        message="select"
        name='gender'
    />;

    it('selector test', () => {
        render(elementWithHandler());
        const selector = screen.getByRole('combobox');
        expect(screen.getByText('male')).toBeInTheDocument();
        expect(selector).toBeInTheDocument();
    });

    it('test element without handler', () => {
        render(elementWithoutHandler());
        expect(screen.queryByText('male')).toBeNull();
    })

})