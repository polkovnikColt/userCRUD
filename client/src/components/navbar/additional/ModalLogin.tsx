import React, {useState} from 'react';
import {Modal, Button, Form, Input} from 'antd';
import {getFormData} from "./service";
import {useDispatch} from "react-redux";
import {loadUser, login} from "../../../store/user/userActions";

export const ModalLogin = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
            dispatch(login({
                name:'name',
                email:'email',
                password:'password',
                gender:'male',
                city:'city',
                age: 21,
                birthday:'XX.XX.XXXX',
                role:'admin'
            }));
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
                {getFormData().map((item,i) =>
                    <Form.Item
                        label={item.label}
                        name={item.name}
                        rules={[{required: true, message: item.message}]}
                        key = {i}
                    >
                        {item.password ? <Input.Password/> : <Input/>}
                    </Form.Item>
                )}
            </Modal>
        </>
    );
}