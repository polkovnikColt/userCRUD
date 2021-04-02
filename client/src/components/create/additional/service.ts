import {FormDataInterface, ProfileInterface} from "../../../types/types";
import {DatePicker, Input} from "antd";

export const getFormData = (): FormDataInterface[] => {
    return [
        {
            label: "Name",
            name: "name",
            message: "Enter your username",
            inputComponent:Input
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
            inputComponent:Input
        },
        {
            label: "Birthday",
            name: "birthday",
            message: "Enter your birthday",
            inputComponent:DatePicker
        }
    ]
}

export const validateCredentials = (credential: ProfileInterface): boolean => {
   const isValidAge = typeof credential.age === "number" && credential.age > 0;
   const isValidGender = credential.gender !== "none";
   const isValidName = credential.name !== "";
   const isValidCity = credential.city !== "";
   const isValidBirthday = credential.birthday !== "";
   return isValidAge && isValidBirthday && isValidGender && isValidName && isValidCity;
}