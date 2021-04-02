import React from 'react';
import {FormItem} from "./FormItem";
import {Selector} from "../selectors/Selector";
import {FormDataInterface} from "../../../types/types";
import {Button, Checkbox} from "antd";
import {Key} from "antd/es/table/interface";

type DataFormProps = {
    formData: FormDataInterface[]
    handleChange: (name: string, value: string) => void
    handleSubmit: () => void
    selectorHandler?: (name: string, value: string) => void
    values?: Key[]
    keys?: string
    checkBoxHandler?: () => void
    hasCheckBox: boolean
    hasSelector: boolean
    checkboxMessage?:string
}

export const DataForm: React.FC<DataFormProps> = (
    {
        formData,
        handleChange,
        handleSubmit,
        values,
        selectorHandler,
        keys,
        hasSelector,
        hasCheckBox,
        checkBoxHandler,
        checkboxMessage,
    }) => {
    return (
        <>
            <div
                className="form-padding mx-auto">
                {hasSelector && <Selector
                    message={keys}
                    values={values}
                    name={keys}
                    key={keys}
                    changeHandler={selectorHandler}/>}
                {formData.map((item, index) =>
                    <FormItem
                        name={item.name}
                        label={item.label}
                        message={item.message}
                        InputComponent={item.inputComponent}
                        key={index}
                        changeHandler={handleChange}/>
                )}
            </div>
            {hasCheckBox &&
            <div className="m-1">
                <Checkbox onClick={checkBoxHandler}/>
                <span>{checkboxMessage}</span>

            </div>}
            <div className="w-100">
                <Button
                    className="mx-auto"
                    onClick={handleSubmit}
                    type="primary">
                    Submit
                </Button>
            </div>
        </>
    )
}