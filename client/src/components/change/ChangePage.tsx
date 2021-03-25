import React, {useState} from 'react';
import {Button, Layout} from "antd";
import {Selector} from "../reusable/Selector";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {getFormData} from "./additional/service";
import {Key} from "antd/es/table/interface";
import {FormItem} from "../reusable/FormItem";
import {changeCredential} from "../../store/user/userActions";
import {ProfileInterface} from "../../types/types";


const {Content} = Layout;

export const ChangePage: React.FC = () => {

    const user = useSelector((store: RootState) => store.user);
    const dispatch = useDispatch();
    const [credential, setCredential] = useState({
        user: user.userCredential?.id,
        name: '',
        email: user.userCredential?.email,
        password: user.userCredential?.password,
        city: '',
        birthday:'',
        age: 0,
        gender: '',
        role:''
    } as ProfileInterface);

    const getUserByName = (name:string,value:string):void => {
        const profileData:ProfileInterface = user.userProfiles.filter(profile => profile.name === value)[0];
        setCredential(profileData);
    }


    const handleChange = (name: string, value: string) => {
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
            <div className="form-padding">
                <div className="w-100">
                    <Selector
                        message={'Choose name: '}
                        name={'name'}
                        values={getProfileNames()}
                        changeHandler={getUserByName}
                    />
                </div>
                {getFormData().map((formData) =>
                    <FormItem formData={formData} changeHandler={handleChange}/>
                )}
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
