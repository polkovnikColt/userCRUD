import React, {useEffect, useState} from "react";
import {Layout, Table} from "antd";
import {columns, getProfilesName} from "./additional/service";
import {useDispatch, useSelector} from "react-redux";
import {RootState, UserState} from "../../store/store";
import {deleteProfile, loadProfiles} from "../../store/user/userActions";
import {Manipulator} from "../reusable/selectors/Manipulator";
import {ProfileInterface} from "../../types/types";

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
                dataSource={user.userProfiles}/>
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