import React from 'react';
import {DatePicker, Form, Input} from "antd";
import {Moment} from 'moment';
import {FormDataInterface} from "../../types/types";

type FormItemProps = {
    formData: FormDataInterface,
    changeHandler: (name: string, value: string) => void;
}

export const FormItem: React.FC<FormItemProps> = ({
                                                      formData,
                                                      changeHandler,
                                                  }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        changeHandler(formData.name, e.target.value);
    }

    const handleMoment = (value: Moment | null, dateString: string): void => {
        changeHandler(formData.name, dateString);
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
                : formData.datePicker ? <
                        DatePicker onChange={handleMoment}/>
                    :
                    <Input
                        onChange={handleChange}/>
            }
        </Form.Item>)
}