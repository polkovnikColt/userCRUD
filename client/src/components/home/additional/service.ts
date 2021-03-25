import {FormDataInterface} from "../../../types/types";

export const getFormData = (): FormDataInterface[] => {
    return [
        {
            label: "Email",
            name: "email",
            message: "Enter your email",
        },{
            label: "Password",
            name: "password",
            message: "Enter your password",
            password: true
        }]
}

