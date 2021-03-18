import React from 'react';
import {Select} from "antd";

type SelectProps = {
    message:string
    values: string[]
}

export const Selector: React.FC<SelectProps> = ({message,values}) => {
    return (
        <div style={{margin: "15px auto", width: 300}}>
            <span style={{margin: '10'}}>{message}</span>
            <Select defaultValue="none" style={{width: "100%"}}>
                {values.map((item,i)=>
                     <Select.Option value={item}>{item}</Select.Option>
                )}
            </Select>
        </div>
    )
}