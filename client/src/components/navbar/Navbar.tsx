import React from 'react';
import {Button, Col, Layout, Menu, Row} from 'antd';
import {getLinks} from "./additional/service";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {unlog} from "../../store/user/userActions";

const {Header} = Layout;

export const Navbar: React.FC = () => {

    const dispatch = useDispatch();
    const user = useSelector((store: RootState) => store.user);

    const unlogUser = ():void => {
        dispatch(unlog());
    }

    return (
        <Header>
            <div className="logo"/>
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <Col span={15}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                        {getLinks(user.userCredential).map((item, index) =>
                            <Menu.Item key={index}><Link to={item.href}>{item.link}</Link></Menu.Item>
                        )}
                    </Menu>
                </Col>
                <Col span={4}>
                    {!!user.userCredential ?
                        <Button
                            onClick={unlogUser}
                           type = "dashed">
                            Unlog
                        </Button> :
                        null}
                </Col>
            </Row>
        </Header>

    )
}