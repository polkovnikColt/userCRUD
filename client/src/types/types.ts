export interface LinkInterface {
    link: string,
    href: string
}

export interface UserInterface {
    name: string,
    email: string,
    password: string,
    age: number,
    city: string,
    birthday: string,
    gender: 'male' | 'female',
    role: 'user' | 'admin'
}

export interface FormDataInterface{
    label:string,
    name:string,
    message:string,
    password: boolean
}