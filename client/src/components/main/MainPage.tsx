import React from "react";
import {Layout, Table} from "antd";
import {columns} from "./additional/service";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

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