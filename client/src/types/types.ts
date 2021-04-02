import React, {Component, ForwardRefExoticComponent} from "react";

export interface LinkInterface {
    link: string,
    href: string
}

export type UserState = {
    userCredential: UserInterface | null,
    userProfiles: ProfileInterface[]
    allProfiles: ProfileInterface[]
    allUsers:[]
}

export interface ProfileInterface {
    id: number
    user:number,
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
    inputComponent: typeof Component | ForwardRefExoticComponent<any>
}

export interface column {
    title: string,
    dataIndex: string,
    key: string
}
