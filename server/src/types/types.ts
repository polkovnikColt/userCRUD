
export interface UserInterface {
    id:number,
    email:string,
    password:string,
}
export interface ProfileInterface {
    name: string,
    email: string,
    password: string,
    age: number,
    city: string,
    birthday: string,
    gender: 'male' | 'female',
    role: 'user' | 'admin'
}