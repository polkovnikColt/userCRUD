import React from 'react';
import {Manipulator} from "./Manipulator";
import {render, screen, fireEvent} from '@testing-library/react';
import {redefineMatchMedia} from "../../../testUtils/beforeEach";
import {renderWithRedux} from "../../../testUtils/reduxRender";
import userEvent from "@testing-library/user-event";

const mockDispatch = jest.fn();

describe('manipulator test', () => {

    beforeEach(redefineMatchMedia);

    const handleFn = jest.fn();
    const element = () => <Manipulator
        handler={handleFn}
        dispatchFunction={() => mockDispatch}
        id={0}
        message="manipulator"
        name='manipulator'
        buttonText='manipulate'
        values={[1,2]}
    />

    it('manipulator test', async () => {
        renderWithRedux(element(),{
        user:{}
        });
        const selector = screen.getByRole('combobox');
        expect(selector).toBeInTheDocument();
    })

    it('button emit test', () => {
        renderWithRedux(element());
        const button = screen.getByRole('button');
        userEvent.click(button);
        expect(mockDispatch).toHaveBeenCalled();
    })

})