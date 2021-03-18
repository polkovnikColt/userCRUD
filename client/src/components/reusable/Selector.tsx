import React from 'react';
import {Select} from "antd";
import {SelectValue} from "antd/es/select";
import {Key} from "antd/es/table/interface";

type SelectProps = {
    message:string,
    name:string,
    values: Key[],
    changeHandler: (name: string, value:string) => void;
}

export const Selector: React.FC<SelectProps> = ({message,values,name,changeHandler}) => {

    const handleChange = (e: SelectValue):void => {
        console.log(e);
        changeHandler(name, e.toString());
    }

    return (
        <div style={{margin: "15px auto", width: 300}}>
            <span style={{margin: '10'}}>{message}</span>
            <Select
                onChange={handleChange}
                defaultValue="none"
                style={{width: "100%"}}>
                {values.map((item,i)=>
                     <Select.Option value={item}>{item}</Select.Option>
                )}
            </Select>
        </div>
    )
}