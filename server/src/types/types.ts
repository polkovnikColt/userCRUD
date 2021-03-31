
export interface UserInterface {
    id:number,
    email:string,
    password:string,
    role:string
}
export interface ProfileInterface {
    user: number
    name?: string,
    age: number,
    city?: string,
    birthday?: string,
    gender?: string | undefined,
    role?: string | undefined
}

export type LoginResponseType = {
    token: string,
    user: UserInterface,
}