import React, {useState} from 'react';
import {Layout} from "antd";
import {getFormData} from "./additional/service";
import {useDispatch, useSelector} from "react-redux";
import {createAccount} from "../../store/user/userActions";
import {RootState} from "../../store/store";
import {DataForm} from "../reusable/items/DataForm";

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
        role: user.userCredential?.role
    });

    const handleChange = (name: string, value: string):void => {
        setCredential({...credential, [name]: value});
    }

    const handleSubmit = ():void => {
        dispatch(createAccount(credential));
    }

    return (
        <Content style={{height: window.innerHeight}}>
            <DataForm
                values={['male','female']}
                formData={getFormData()}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                selectorHandler={handleChange}
                keys="gender"
            />
        </Content>
    )
}