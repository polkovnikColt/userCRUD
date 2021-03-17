import React from 'react';
import { Layout,Form,Input } from "antd";
import {Selector} from "../reusable/Selector";
import {getFormData} from "./additional/service";


const {Content} = Layout;

export const CreateAccountPage: React.FC = () => {
    return (
       <Content style={{height: window.innerHeight}}>
           <div style={{padding:30}}>
           {getFormData().map((item,i) =>
            <Form.Item
                label={item.label}
                name={item.name}
                rules={[{required:true,message:item.message}]}
                key = {i}
            >
                {item.password ? <Input.Password/>: <Input/>}
            </Form.Item>
           ) }
           <Selector message="Gender" values={["male", "female"]}/>
           </div>
       </Content>
    )
}