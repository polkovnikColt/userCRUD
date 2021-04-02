import React from 'react';
import {Select} from "antd";
import {SelectValue} from "antd/es/select";
import {Key} from "antd/es/table/interface";

type SelectProps = {
    message?: string,
    name?: string,
    values?: Key[],
    changeHandler?: (name: string, value: string) => void;
}

export const Selector: React.FC<SelectProps> = ({message, values, name, changeHandler}) => {

    const handleChange = (e: SelectValue): void => {
        if (changeHandler && name) changeHandler(name, e.toString());
    }

    return (
        <div
            className="mx-auto selector-width ">
            <span className="m-1">{message}</span>
            <Select
                className="m-1 selector-width"
                onChange={handleChange}
                defaultValue="none"
            >
                {values && values.map((item, i) =>{
                    return <Select.Option value={item} key={i}>{item}</Select.Option>
                })}
            </Select>
        </div>
    )
}