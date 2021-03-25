
export interface UserInterface {
    id:number,
    email:string,
    password:string,
    role:string
}
export interface ProfileInterface {
    user: number
    name?: string,
    email?: string | undefined,
    password?: string | undefined,
    age: number,
    city?: string,
    birthday?: string,
    gender?: string | undefined,
    role?: string | undefined
}

export type LoginResponseType = {
    token?: string,
    user?: UserInterface,
    loginError?: string
    registrationError?:string
}