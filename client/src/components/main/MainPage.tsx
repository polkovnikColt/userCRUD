import React, {useEffect, useState} from "react";
import {Layout, Table} from "antd";
import {columns} from "./additional/service";
import {useDispatch, useSelector} from "react-redux";
import {RootState, UserState} from "../../store/store";
import {DeleteProfile} from "./additional/DeleteProfile";
import {loadProfiles} from "../../store/user/userActions";

const {Content} = Layout;

export const MainPage: React.FC = () => {

    const dispatch = useDispatch();
    const user:UserState = useSelector((store: RootState) => store.user);

    useEffect(() => {
        dispatch(loadProfiles(user.userCredential));
    },[])


    return (
        <Content style={{height: window.innerHeight}}>
            <Table
                className="form-padding"
                columns={columns}
                dataSource={user.userProfiles}/>
                <DeleteProfile/>
        </Content>
    )
}