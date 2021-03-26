export interface LinkInterface {
    link: string,
    href: string
}

export interface ProfileInterface {
    id: number
    user:number | undefined,
    name?: string | undefined,
    email?: string | undefined,
    password?: string | undefined,
    age?: number,
    city?: string,
    birthday?: string,
    gender?: string | undefined,
    role?: string | undefined
}

export interface UserInterface{
    id:number,
    email:string,
    password:string,
    role: string,
}

export interface FormDataInterface{
    label:string,
    name:string,
    message:string,
    password?: boolean,
    datePicker?: boolean
}

export interface column {
    title: string,
    dataIndex: string,
    key: string
}
