import React from 'react';
import {render, screen, fireEvent, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {DataForm} from "./DataForm";
import {Input} from "antd";
import {redefineMatchMedia} from "../../../testUtils/beforeEach";

describe('Data form', () => {

    beforeEach(redefineMatchMedia);
    const onSubmit = jest.fn();
    const mockDataFrom = () =>
        <DataForm
        hasSelector={false}
        hasCheckBox={false}
        formData={[
            {
                label: "name",
                name: "name",
                message: "Input name",
                inputComponent: Input
            },
            {
                label: "password",
                name: "password",
                message: "Input password",
                inputComponent: Input.Password
            }
        ]}
        handleChange={jest.fn()}
        handleSubmit={onSubmit}
        selectorHandler={jest.fn()}
        values={["male", "female"]}
        keys=""
    />;

    it('text input test', () => {
        render(mockDataFrom());
        const input = screen.getByLabelText('name');
        userEvent.type(input, 'text');
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue('text');
    });

    it('password input test', () => {
        render(mockDataFrom());
        const inputPassword = screen.getByLabelText('password');
        expect(inputPassword).toHaveAttribute('type','password');
    })

    it('submit button test', () => {
        render(mockDataFrom());
        const submitButton = screen.getByRole('button');
        userEvent.click(submitButton);
        expect(submitButton).toBeInTheDocument();
        expect(onSubmit).toHaveBeenCalled();
    })
})