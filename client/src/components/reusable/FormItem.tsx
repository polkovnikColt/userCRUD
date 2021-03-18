import React, {useState} from 'react';
import {Form, Input} from "antd";
import {FormDataInterface} from "../../types/types";

type FormItemProps = {
    formData: FormDataInterface,
    changeHandler: (name: string, value:string) => void;
}

export const FormItem: React.FC<FormItemProps> = ({formData, changeHandler}) => {

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        changeHandler(formData.name, e.target.value);
    }

    return (
        <Form.Item
        label={formData.label}
        name={formData.name}
        rules={[{required: true, message: formData.message}]}
    >
        {formData.password ?
            <Input.Password
                onChange={handleChange}/>
        : <Input
                onChange={handleChange}/>
        }
    </Form.Item>)
}