import React from 'react';
import {DatePicker, Form, Input} from "antd";
import {Moment} from 'moment';
import {FormDataInterface} from "../../types/types";

type FormItemProps = {
    formData: FormDataInterface,
    changeHandler: (name: string, value:string) => void;
    momentHandler?: (value:Moment | null, dateString: string) => void
}

export const FormItem: React.FC<FormItemProps> = ({formData,
                                                      changeHandler,
                                                      momentHandler}) => {

    const handleChange = (e:React.ChangeEvent<HTMLInputElement> ):void => {
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
        : formData.datePicker? <
            DatePicker onChange={momentHandler}/>
                :
                <Input
                onChange={handleChange}/>
        }
    </Form.Item>)
}