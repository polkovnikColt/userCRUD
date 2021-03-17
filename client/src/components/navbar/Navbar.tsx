import React, {useState} from 'react';
import {Col, Layout, Menu, Row,Skeleton} from 'antd';
import {getLinks} from "./additional/service";
import {Link} from "react-router-dom";
import {Button} from 'antd';
import {ModalLogin} from './additional/ModalLogin';

const {Header} = Layout;

export const Navbar: React.FC = () => {

    return (
        <Header>
            <div className="logo"/>
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                <Skeleton.Image
                    style = {{width: 50,height:50, margin: 10}}
                />
                <Col span={15}
                style = {{height:"inherit"}}
                >
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
                        {getLinks().map((item, index) =>
                            <Menu.Item key={index}><Link to={item.href}>{item.link}</Link></Menu.Item>
                        )}
                    </Menu>
                </Col>
                <Col span={4}
                     style = {{height:"inherit"}}
                >
                   <ModalLogin/>
                </Col>
            </Row>
        </Header>

    )
}