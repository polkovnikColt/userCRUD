export interface LinkInterface {
    link:string,
    href:string
}

export interface UserInterface{
    name:string,
    email:string,
    password:string,
    age:number,
    gender: 'male' | 'female',
    role:'user' | 'admin'
}