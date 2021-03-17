import React from 'react';
import {Modal, Select} from "antd";

type SelectProps = {
    message:string
    values: string[]
}

export const Selector: React.FC<SelectProps> = ({message,values}) => {
    return (
        <>
            <span style={{margin: 10}}>{message}</span>
            <Select defaultValue="none" style={{width: 85 + "%"}}>
                {values.map((item,i)=>
                     <Select.Option value={item}>{item}</Select.Option>
                )}
            </Select>
        </>
    )
}