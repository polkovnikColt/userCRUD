import React from 'react';
import {HomePage} from "./HomePage";
import {screen} from '@testing-library/react'
import {redefineMatchMedia} from "../../testUtils/beforeEach";
import {renderWithRedux} from "../../testUtils/reduxRender";
import userEvent from "@testing-library/user-event";

// jest.mock("../reusable/items/FormItem", () => ({
//     FormItem: () => <input/>
// }));

describe('test homepage', () => {

    beforeEach(redefineMatchMedia);

    const element = () => <HomePage/>;

    it('test checkbox', async () => {
        const {getByRole, container} = renderWithRedux(element());
        const checked = jest.fn();
        const checkbox = getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();


    });

    it('test useEffect login on load',async () => {
        renderWithRedux(element());

    })

})