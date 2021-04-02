import React from 'react';
import {render, screen} from '@testing-library/react';
import {FormItem} from "./FormItem";
import {Form, Input} from "antd";
import userEvent from "@testing-library/user-event";
import {redefineMatchMedia} from "../../../testUtils/beforeEach";

describe('Form item test', () => {

    beforeEach(redefineMatchMedia);

    const formWrapped = () => <Form>
            <FormItem
                name=""
                label=""
                message=""
                InputComponent={Input}
                changeHandler={jest.fn()}
            />
        </Form>;

    it("render test", () => {
        render(formWrapped())
        const inputElement = screen.getByRole('textbox');
        userEvent.type(inputElement,'text');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveValue('text');
    })
})