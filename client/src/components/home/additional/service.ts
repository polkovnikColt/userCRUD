import {FormDataInterface} from "../../../types/types";
import {Input} from "antd";

export const getFormData = (): FormDataInterface[] => {
    return [
        {
            label: "Email",
            name: "email",
            message: "Enter your email",
            inputComponent:Input
        },{
            label: "Password",
            name: "password",
            message: "Enter your password",
            inputComponent:Input.Password
        }]
}

