import {FormDataInterface} from "../../../types/types";

export const getFormData = (): FormDataInterface[] => {
    return [
        {
            label: "Name",
            name: "name",
            message: "Enter your username",
            password: false
        },
        {
            label: "City",
            name: "city",
            message: "Enter your city",
            password: false
        },
        {
            label: "Age",
            name: "age",
            message: "Enter your age",
            password: false
        },
        {
            label: "City",
            name: "city",
            message: "Enter your city",
            password: false
        },
        {
            label: "Birthday",
            name: "birthday",
            message: "Enter your birthday",
            password: false
        }
    ]
}