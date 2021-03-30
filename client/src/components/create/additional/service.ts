import {FormDataInterface, ProfileInterface} from "../../../types/types";

export const getFormData = (): FormDataInterface[] => {
    return [
        {
            label: "Name",
            name: "name",
            message: "Enter your username",
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
        },
        {
            label: "Birthday",
            name: "birthday",
            message: "Enter your birthday",
            datePicker: true
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