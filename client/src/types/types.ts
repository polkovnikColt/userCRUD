export interface LinkInterface {
    link: string,
    href: string
}

export interface ProfileInterface {
    name?: string,
    email?: string | undefined,
    password?: string | undefined,
    age?: number,
    city?: string,
    birthday?: string,
    gender?: string | undefined,
    role?: string | undefined
}

export interface UserInterface{
    email:string,
    password:string,
    token:string,
    role: string,
}

export interface FormDataInterface{
    label:string,
    name:string,
    message:string,
    password: boolean
}