import React from 'react';
import {Form, Input, Layout} from "antd";
import {Selector} from "../reusable/Selector";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {getFormData} from "./additional/service";

const {Content} = Layout;

export const ChangePage:React.FC = () =>{

    const user = useSelector((store:RootState) => store.user);

    const getProfileNames = ():string[] => {
        return user.userProfiles.map(user => user.name);
    }

    return (
        <Content style={{height: window.innerHeight}}>
            <div style={{padding:50}}>
                   <div style={{width : "100%"}}><Selector message={''} values={getProfileNames()}/></div>
            {getFormData().map((item,i) =>
                <Form.Item
                    label={item.label}
                    name={item.name}
                    rules={[{required:true,message:item.message}]}
                    key = {i}
                >
                    {item.password ? <Input.Password/> : <Input/>}
                </Form.Item>
            ) }
            </div>
        </Content>
    )
}
