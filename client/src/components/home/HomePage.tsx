import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Layout} from "antd";
import {getFormData, validateCredential} from "../navbar/additional/service";
import {FormItem} from "../reusable/items/FormItem";
import {login, loginOnLoad, registration} from "../../store/user/userActions";
import {useDispatch} from "react-redux";

const {Content} = Layout;

export const HomePage: React.FC = () => {

    const dispatch = useDispatch();
    const [registr, setRegistr] = useState(false);
    const [credential, setCredential] = useState({
        id: 0,
        email: '',
        password: '',
        role: 'user'
    });

    useEffect(() => {
        dispatch(loginOnLoad());
    },[])

    const handleChange = (name: string, value: string) => {
        setCredential({...credential, [name]: value});
    }

    const handleOk = () => {
        if (validateCredential(credential)) {
            alert('All fields must be filled');
            return;
        }
        if (registr) {
            dispatch(registration(credential));
        } else {
            dispatch(login(credential));
        }
    };

    return (
        <Content
            className="form-padding"
            style={{height: window.innerHeight}}
        >
            <div className="w-100">
                <h2 className="mx-auto w-50">Welcome to the user CRUD</h2>
                <h3 className="mx-auto w-50">PLease login or create an account</h3>
            </div>
            {getFormData().map((item, i) =>
                <FormItem
                    formData={item}
                    key={i}
                    changeHandler={handleChange}/>
            )}
            <Checkbox
                onChange={() => setRegistr(prev => !prev)}>
                Registration
            </Checkbox>
            <Button
                onClick={handleOk}
                type="primary">
                Submit
            </Button>
        </Content>
    )
}