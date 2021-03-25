import React, {useState} from 'react';
import {Selector} from "../../reusable/Selector";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {getProfilesName} from "./service";
import {Button} from "antd";
import {deleteProfile} from "../../../store/user/userActions";
import {ProfileInterface} from "../../../types/types";

export const DeleteProfile: React.FC = () => {

    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.user);
    const [id, setId] = useState(0);

    const handleChange = (name: string, value: string): void => {
        const credential:ProfileInterface = user.userProfiles.filter(user => user.name === value)[0];
        console.log(credential);
        console.log(user.userProfiles)
        console.log(credential);
        setId(credential.id as number);

    }

    const handleSubmit = ():void => {
        dispatch(deleteProfile(id));
    }

    return (
        <>
            <Selector
                message={'Profile to delete'}
                name={'delete'}
                values={getProfilesName(user.userProfiles)}
                changeHandler={handleChange}/>
            <div className="w-100">
                <Button
                    className="mx-auto"
                    onClick={handleSubmit}
                    type="primary">
                    Delete Profile
                </Button>
            </div>
        </>
    )
}