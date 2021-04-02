import React, {useState} from 'react';
import {Collapse} from "antd";
import {DataForm} from "../../reusable/items/DataForm";
import {getFormData, validateCredentials} from "./service";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {changeCredential} from "../../../store/user/userActions";
import {Key} from "antd/es/table/interface";
import {ProfileInterface} from "../../../types/types";

const {Panel} = Collapse;

export const ChangeCredential: React.FC = () => {

    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.user);
    const [credential, setCredential] = useState({
        user: user.userCredential?.id,
        name: '',
        email: user.userCredential?.email,
        password: user.userCredential?.password,
        city: '',
        birthday:'',
        age: 0,
        gender: '',
        role:user.userCredential?.role
    } as ProfileInterface);

    const getUserByName = (name:string,value:string):void => {
        const profileData:ProfileInterface = user.allProfiles
            .filter(profile => profile.name === value)[0];
        setCredential(profileData);
    }

    const getProfileNames = (): Key[] => {
        return user.allProfiles.map(user => user.name) as Key[];
    }

    const handleChange = (name: string, value: string): void => {
        setCredential({...credential, [name]: value});
    }

    const handleSubmit = (): void => {
        console.log(credential.age)
        console.log(credential.birthday)
        if(!validateCredentials(credential)){
            alert("All fields must have correct values");
            return;
        }
        dispatch(changeCredential(credential));
    }

    return (
        <div className="form-padding m-1">
        <Collapse>
            <Panel
                header="Change profile credential"
                key="1">
                <DataForm
                    hasCheckBox={false}
                    hasSelector={true}
                    formData={getFormData()}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    selectorHandler={getUserByName}
                    values={getProfileNames()}
                    keys="name"
                />
            </Panel>
        </Collapse>
        </div>
    )
}