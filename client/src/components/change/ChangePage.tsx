import React, {useState} from 'react';
import {Button, Form, Input, Layout} from "antd";
import {Selector} from "../reusable/Selector";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {getFormData} from "./additional/service";
import {Key} from "antd/es/table/interface";
import {FormItem} from "../reusable/FormItem";
import {changeCredential, createAccount} from "../../store/user/userActions";
import {ProfileInterface} from "../../types/types";

const {Content} = Layout;

export const ChangePage: React.FC = () => {

    const user = useSelector((store: RootState) => store.user);
    const dispatch = useDispatch();
    const [profile, setProfile] = useState({} as ProfileInterface);


    const getUserByName = (): ProfileInterface => {
        return user.userProfiles.filter(profile => profile.name === credential.name)[0];
    }

    const [credential, setCredential] = useState({
        name: '-',
        email: user.userCredential?.email,
        password: user.userCredential?.password,
        city: profile?.city,
        birthday:profile?.birthday,
        age: profile?.age,
        gender: profile?.gender,
        role: profile?.role
    });

    const handleChange = (name: string, value: string) => {
        setProfile(getUserByName());
        setCredential({...credential, [name]: value});
    }

    const getProfileNames = (): Key[] => {
        return user.userProfiles.map(user => user.name) as Key[];
    }
    const handleSubmit = () => {
        dispatch(changeCredential(credential));
    }

    return (
        <Content style={{height: window.innerHeight}}>
            <div style={{padding: 50}}>
                <div style={{width: "100%"}}>
                    <Selector
                        message={'Choose name: '}
                        name={'name'}
                        values={getProfileNames()}
                        changeHandler={handleChange}
                    />
                </div>
                {getFormData().map((formData) =>
                    <FormItem formData={formData} changeHandler={handleChange}/>
                )}
                <Button
                    style={{margin: "0 auto"}}
                    onClick={handleSubmit}
                    type="primary">
                    Submit
                </Button>
            </div>

        </Content>
    )
}
