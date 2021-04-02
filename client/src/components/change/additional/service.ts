import {FormDataInterface, ProfileInterface} from "../../../types/types";
import {DatePicker, Input} from "antd";

export const getFormData = ():FormDataInterface[] => {
    return [
        {
            label: "Name",
            name: "name",
            message: "Enter your username",
            inputComponent: Input,
        },
        {
            label: "City",
            name: "city",
            message: "Enter your city",
            inputComponent:Input
        },
        {
            label: "Age",
            name: "age",
            message: "Enter your age",
            inputComponent: Input.Password
        },
        {
            label:"Birthday",
            name:"birthday",
            message:"Enter your birthday",
            inputComponent: DatePicker
        }
    ]
}

export const validateCredentials = (credential:ProfileInterface):boolean => {
    const isValidAge = typeof credential.age === "number" && credential.age > 0;
    return isValidAge;
}