import React from "react";
import {Layout, Table} from "antd";
import {columns} from "./additional/service";
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../store/store";
import {loadUser} from "../../store/user/userActions";

const {Content} = Layout;


export const MainPage: React.FC = () => {

    const user = useSelector((store: RootState) => store.user);

    return (
        <Content style={{height: window.innerHeight}}>
            <Table
                style = {{padding:30}}
                columns={columns}
                dataSource={user.userProfiles}/>
        </Content>
    )
}