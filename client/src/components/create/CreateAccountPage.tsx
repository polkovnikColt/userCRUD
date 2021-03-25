import React, {useState} from 'react';
import {Layout, Button} from "antd";
import {Selector} from "../reusable/Selector";
import {getFormData} from "./additional/service";
import {FormItem} from "../reusable/FormItem";
import {useDispatch, useSelector} from "react-redux";
import {createAccount} from "../../store/user/userActions";
import {RootState} from "../../store/store";

const {Content} = Layout;

export const CreateAccountPage: React.FC = () => {

    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.user);

    const [credential, setCredential] = useState({
        id: 0,
        user: user.userCredential?.id,
        name: '-',
        email: user.userCredential?.email,
        password: user.userCredential?.password,
        city: '-',
        birthday: '-',
        age: 0,
        gender: '-',
        role: 'user'
    });

    const handleChange = (name: string, value: string) => {
        setCredential({...credential, [name]: value});
    }

    const handleSubmit = () => {
        dispatch(createAccount(credential));
    }

    return (
        <Content style={{height: window.innerHeight}}>
            <div
                className="form-padding mx-auto">
                {getFormData().map((item, index) =>
                    <FormItem formData={item} key={index} changeHandler={handleChange}/>
                )}
                <Selector message="Gender"
                          values={["male", "female"]}
                          name={"gender"}
                          key = "gender"
                          changeHandler={handleChange}/>
            </div>
            <div className="w-100">
            <Button
                className="mx-auto"
                onClick={handleSubmit}
                type="primary">
                Submit
            </Button>
        </div>
        </Content>
    )
}