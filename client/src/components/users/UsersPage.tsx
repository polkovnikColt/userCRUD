import React, {useEffect} from 'react';
import {Layout, Table} from "antd";
import {columns} from "../main/additional/service";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {loadAllProfiles, loadAllUsers} from "../../store/user/userActions";
import {DeleteProfile} from "../reusable/DeleteProfile";
import {AdminDataTable} from "./additional/AdminDataTable";
import {UpdateToAdmin} from "./additional/UpdateToAdmin";

const {Content} = Layout;

export const UsersPage: React.FC = () => {

    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.user);

    useEffect(() => {
        dispatch(loadAllProfiles());
        dispatch(loadAllUsers());
    }, [])

    return (
        <Content style={{minHeight: window.innerHeight}}>
            <AdminDataTable/>
            <DeleteProfile
                profiles={user.allProfiles}
            />
            <UpdateToAdmin
                users={user.allUsers}
            />
            <Table
                className="form-padding"
                columns={columns}
                dataSource={user.allProfiles}/>
        </Content>
    )
}