import React from 'react';
import {FormItem} from "./FormItem";
import {Selector} from "../selectors/Selector";
import {FormDataInterface} from "../../../types/types";
import {Button} from "antd";
import {Key} from "antd/es/table/interface";

type DataFormProps = {
    formData: FormDataInterface[]
    handleChange: (name: string, value: string) => void
    handleSubmit: () => void
    selectorHandler: (name:string,value: string) => void
    values: Key[]
    keys: string
}

export const DataForm: React.FC<DataFormProps> = ({formData, handleChange,
                                                      handleSubmit, values, selectorHandler,
                                                      keys }) => {
    return (
        <>
            <div
                className="form-padding mx-auto">
                <Selector
                          message={keys}
                          values={values}
                          name={keys}
                          key={keys}
                          changeHandler={selectorHandler}/>
                {formData.map((item, index) =>
                    <FormItem formData={item} key={index} changeHandler={handleChange}/>
                )}
            </div>
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