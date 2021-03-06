import {LinkInterface, FormDataInterface, UserInterface} from "../../../types/types";
import {Input} from "antd";

export const getLinks = (user: UserInterface | null): LinkInterface[] => {
    if (user) {
        if (user?.role === 'admin') {
            return [
                {link: "Main", href: "/"},
                {link: "Create profile", href: "/user"},
                {link: "Change credential", href: "/change"},
                {link: "Users", href: "/users"},
            ]
        }
        return [
            {link: "Main", href: "/"},
            {link: "Create account", href: "/user"},
            {link: "Change credential", href: "/change"},
        ]
    }
    return [
        {link: "Main", href: "/"},
    ]
}

export const getFormData = (): FormDataInterface[] => {
    return [
        {
            label: "Email",
            name: "email",
            message: "Enter your email",
            inputComponent: Input
        }, {
            label: "Password",
            name: "password",
            message: "Enter your password",
            inputComponent: Input.Password
        }]
}

export const validateCredential = (credential: UserInterface): boolean => {
    return credential.password === '' || credential.password === '';
}