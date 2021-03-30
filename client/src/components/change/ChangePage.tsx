import React, {useState} from 'react';
import {Layout} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {getFormData} from "./additional/service";
import {Key} from "antd/es/table/interface";
import {changeCredential} from "../../store/user/userActions";
import {ProfileInterface} from "../../types/types";
import {DataForm} from "../reusable/items/DataForm";
import {validateCredentials} from "./additional/service";


const {Content} = Layout;

export const ChangePage: React.FC = () => {

    const user = useSelector((store: RootState) => store.user);
    const dispatch = useDispatch();
    const [credential, setCredential] = useState({
        user: user.userCredential?.id,
        name: '',
        city: '',
        birthday:'',
        age: 0,
        gender: '',
        role:user.userCredential?.role
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
        if(!validateCredentials(credential)){
            alert("All fields must have correct value");
            return;
        }
        dispatch(changeCredential(credential));
    }

    return (
        <Content style={{height: window.innerHeight}}>
           <DataForm
               formData={getFormData()}
               handleChange={handleChange}
               handleSubmit={handleSubmit}
               selectorHandler={getUserByName}
               values={getProfileNames()}
               keys="name"
            />
        </Content>
    )
}
