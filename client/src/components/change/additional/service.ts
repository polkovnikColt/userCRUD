import {FormDataInterface} from "../../../types/types";

export const getFormData = ():FormDataInterface[] => {
    return [
        {
            label: "Name",
            name: "name",
            message: "Enter your username",
        },
        {
            label: "Password",
            name: "password",
            message: "Enter your password",
            password: true
        },
        {
            label: "Email",
            name: "email",
            message: "Enter your email",
        },
        {
            label: "City",
            name: "city",
            message: "Enter your city",
        },
        {
            label: "Age",
            name: "age",
            message: "Enter your age",
        }
    ]
}