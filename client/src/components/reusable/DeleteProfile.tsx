import React, {useState} from 'react';
import {Selector} from "./Selector";
import {useDispatch} from "react-redux";
import {getProfilesName} from "../main/additional/service";
import {Button} from "antd";
import {deleteProfile} from "../../store/user/userActions";
import {ProfileInterface} from "../../types/types";

type DeleteProfileProps = {
    profiles: ProfileInterface[],
}

export const DeleteProfile: React.FC<DeleteProfileProps> = ({profiles}) => {

    const dispatch = useDispatch();
    const [id, setId] = useState(0);

    const handleChange = (name: string, value: string): void => {
        const credential: ProfileInterface = profiles.filter(profile => profile.name === value)[0];
        setId(+credential.id);

    }

    const handleSubmit = (): void => {
        dispatch(deleteProfile(id));
    }

    return (
        <>
            <Selector
                message={'Profile to delete'}
                name={'delete'}
                values={getProfilesName(profiles)}
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