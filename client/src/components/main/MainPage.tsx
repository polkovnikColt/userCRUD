import React, {useEffect, useState} from "react";
import {Layout, Table} from "antd";
import {appendOwner, columns, getProfilesName} from "./additional/service";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {deleteProfile, loadProfiles} from "../../store/user/userActions";
import {Manipulator} from "../reusable/selectors/Manipulator";
import {ProfileInterface, UserState} from "../../types/types";

const {Content} = Layout;

export const MainPage: React.FC = () => {

    const dispatch = useDispatch();
    const user:UserState = useSelector((store: RootState) => store.user);
    const [profileId,setProfileId] = useState(0);

    const profileHandler = (name:string,value:string) => {
        const credential: ProfileInterface = user.userProfiles.filter(profile => profile.name === value)[0];
        setProfileId(+credential.id);
    }

    useEffect(() => {
        dispatch(loadProfiles(user.userCredential));
    },[])


    return (
        <Content style={{height: window.innerHeight}}>
            <Table
                className="form-padding"
                columns={columns}
                dataSource={appendOwner(user)}/>
               <Manipulator
                   handler={profileHandler}
                   dispatchFunction={deleteProfile}
                   id={profileId}
                   message="Profile to delete"
                   name="delete"
                   buttonText="Delete"
                   values={getProfilesName(user.userProfiles)}
                   />
        </Content>
    )
}