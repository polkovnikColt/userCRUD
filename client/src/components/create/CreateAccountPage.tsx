import React, {useState} from 'react';
import {Layout} from "antd";
import {getFormData} from "./additional/service";
import {useDispatch, useSelector} from "react-redux";
import {createAccount} from "../../store/user/userActions";
import {RootState} from "../../store/store";
import {DataForm} from "../reusable/items/DataForm";
import {validateCredentials} from "./additional/service";
import {ProfileInterface} from "../../types/types";

const {Content} = Layout;

export const CreateAccountPage: React.FC = () => {

    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.user);

    const [credential, setCredential] = useState({
        id: 0,
        user: user.userCredential?.id,
        name: '',
        city: '',
        birthday: '',
        age: 0,
        gender: '',
        role: user.userCredential?.role
    } as ProfileInterface);

    const handleChange = (name: string, value: string):void => {
        setCredential({...credential, [name]: value});
    }

    const handleSubmit = ():void => {
        if(validateCredentials(credential)){
            alert("All fields must be filled and values correct");
            return;
        }
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