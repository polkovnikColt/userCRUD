import React, {useState} from 'react';
import {Layout, Form, Input, Button} from "antd";
import {Selector} from "../reusable/Selector";
import {getFormData} from "./additional/service";
import {FormItem} from "../reusable/FormItem";
import {useDispatch, useSelector} from "react-redux";
import {createAccount} from "../../store/user/userActions";
import {RootState} from "../../store/store";


const {Content} = Layout;

export const CreateAccountPage: React.FC = () => {

    const dispatch = useDispatch();
    const user = useSelector((store:RootState) => store.user);

    const [credential, setCredential] = useState({
        name:'-',
        email: user.userCredential?.email ,
        password: user.userCredential?.password,
        city:'-',
        birthday:'-',
        age:0,
        gender: '-',
        role: 'user'
    });

    const handleChange = (name: string, value: string) => {
        setCredential({...credential, [name]: value});
    }

    const handleSubmit = () => {
        dispatch(createAccount(credential));
    }

    return (
       <Content style={{height: window.innerHeight}}>
           <div style={{padding:30}}>
           {getFormData().map((item,index) =>
           <FormItem formData={item} key={index} changeHandler={handleChange}/>
           ) }
           <Selector message="Gender"
                     values={["male", "female"]}
                     name = {"gender"}
                     changeHandler= {handleChange}/>
           </div>
               <Button
               style ={{margin:"0 auto"}}
               onClick = {handleSubmit}
               type="primary">
               Submit
           </Button>
       </Content>
    )
}