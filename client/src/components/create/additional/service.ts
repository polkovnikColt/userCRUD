
interface FormDataInterface{
    label:string,
    name:string,
    message:string,
    password: boolean
}

export const getFormData = () => {
    return [
        {
            label: "Username",
            name: "username",
            message: "Enter your username",
            password: false
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
        }
    ]
}