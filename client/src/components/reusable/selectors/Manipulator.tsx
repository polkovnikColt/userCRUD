import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Selector} from "./Selector";
import {Button} from "antd";
import {Key} from "antd/es/table/interface";

type ManipulatorProps = {
    handler: (name:string,value:string) => void
    dispatchFunction: (id:number) => void
    id:number
    message:string
    name:string
    buttonText:string
    values: Key[]
}

export const Manipulator:React.FC<ManipulatorProps> = ({
    handler,
    dispatchFunction,
    id,
    message,
    name,
    buttonText,
    values
                                                       }) => {

    const dispatch = useDispatch();

    const handleSubmit = (): void => {
        dispatch(dispatchFunction(id));
    }

    return (
        <>
            <Selector
                message={message}
                name={name}
                values={values}
                changeHandler={handler}/>
            <div className="w-100">
                <Button
                    className="ant-btn mx-auto"
                    onClick={handleSubmit}
                    type="primary">
                    {buttonText}
                </Button>
            </div>
        </>
    )
}