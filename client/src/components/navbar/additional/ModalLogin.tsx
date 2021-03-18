import React, {useState} from 'react';
import {Modal, Button, Form, Input} from 'antd';
import {getFormData} from "./service";
import {useDispatch} from "react-redux";
import {loadUser, login} from "../../../store/user/userActions";
import {FormItem} from "../../reusable/FormItem";

export const ModalLogin = () => {

    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [credential, setCredential] = useState({
        email: '',
        password: '',
        token:'token',
        role: 'admin'
    });

    const showModal = () => {
        setVisible(true);
    };

    const handleChange = (name: string, value: string) => {
        setCredential({...credential, [name]: value});
    }

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
            dispatch(login(credential));
            dispatch(loadUser());
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Login
            </Button>
            <Modal
                title="Title"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                {getFormData().map((item, i) =>
                    <FormItem
                        formData={item}
                        key={i}
                        changeHandler={handleChange}/>
                )}
            </Modal>
        </>
    );
}