import React, {useState} from 'react';
import {Form, Input, Layout} from "antd";
import {Selector} from "../reusable/Selector";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {getFormData} from "./additional/service";
import {Key} from "antd/es/table/interface";

const {Content} = Layout;

export const ChangePage:React.FC = () =>{

    const user = useSelector((store:RootState) => store.user);
    const [credential,setCredential] = useState({

    });

    const getProfileNames = (): Key[]  => {
        return user.userProfiles.map(user => user.name) as Key[];
    }

    return (
        <Content style={{height: window.innerHeight}}>
            <div style={{padding:50}}>
                   {/*<div style={{width : "100%"}}>*/}
                   {/*    <Selector*/}
                   {/*    message={''}*/}
                   {/*    name = {'name'}*/}
                   {/*    values={getProfileNames()}*/}
                   {/*    changeHandler={null}*/}
                   {/*    />*/}
                   {/*</div>*/}
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
