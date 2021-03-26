import React, {useEffect, useState} from 'react';
import {Layout, Table} from "antd";
import {columns} from "../main/additional/service";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {deleteProfile, deleteUser, loadAllProfiles, loadAllUsers, updateToAdmin} from "../../store/user/userActions";
import {adminDataTableColumns, getProfilesName, getUsersEmails, organizeData} from "./additional/service";
import {ChangeCredential} from "./additional/ChangeCredential";
import {ProfileInterface, UserInterface} from "../../types/types";
import {Manipulator} from "../reusable/selectors/Manipulator";

const {Content} = Layout;

export const UsersPage: React.FC = () => {

    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.user);
    const [profileId,setProfileId] = useState(0);
    const [userId, setUserId] = useState(0);

    const profileHandler = (name:string,value:string) => {
        const credential: ProfileInterface = user.allProfiles.filter(profile => profile.name === value)[0];
        setProfileId(+credential.id);
    }

    const userHandler = (name:string,value:string) => {
        const credential: UserInterface = user.allUsers.filter((user: UserInterface) => user.email === value)[0];
        setUserId(+credential.id);
    }


    useEffect(() => {
        dispatch(loadAllProfiles());
        dispatch(loadAllUsers());
    }, [])

    return (
        <Content style={{minHeight: window.innerHeight}}>
            <Table
                className="form-padding"
                columns={adminDataTableColumns}
                dataSource={organizeData(user)}
            />
            <Manipulator
                handler={profileHandler}
                dispatchFunction={deleteProfile}
                id={profileId}
                message="Profile to delete"
                name="delete"
                buttonText="Delete"
                values={getProfilesName(user.allProfiles) }
                />
            <Manipulator
                handler={userHandler}
                dispatchFunction={updateToAdmin}
                id={userId}
                message="Update user to admin"
                name="update"
                buttonText="Update"
                values={getUsersEmails(user.allUsers)}
                />
             <Manipulator
                 handler={userHandler}
                 dispatchFunction={deleteUser}
                 id={userId}
                 message="Delete user from system"
                 name="delete"
                 buttonText="Delete"
                 values={getUsersEmails(user.allUsers)}
                 />
            <ChangeCredential/>
            <Table
                className="form-padding"
                columns={columns}
                dataSource={user.allProfiles}
            />
        </Content>
    )
}