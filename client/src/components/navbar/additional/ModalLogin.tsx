import React, {useState} from 'react';
import {Modal, Button, Checkbox} from 'antd';
import {getFormData, validateCredential} from "./service";
import {useDispatch} from "react-redux";
import {login,registration} from "../../../store/user/userActions";
import {FormItem} from "../../reusable/FormItem";

export const ModalLogin = () => {

    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [registr, setRegistr] = useState(false);
    const [credential, setCredential] = useState({
        email: '',
        password: '',
        role: 'user'
    });

    const showModal = () => {
        setVisible(true);
    };

    const handleChange = (name: string, value: string) => {
        setCredential({...credential, [name]: value});
    }

    const handleOk = () => {
        if (validateCredential(credential)) {
            alert('All fields must be filled');
            return;
        }
        if (registr) {
            alert("registr");
            dispatch(registration(credential));
            return;
        } else {
            dispatch(login(credential));
        }
        setVisible(false);
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
                onCancel={handleCancel}
            >
                {getFormData().map((item, i) =>
                    <FormItem
                        formData={item}
                        key={i}
                        changeHandler={handleChange}/>
                )}
                <Checkbox onChange={() => setRegistr(true)}>Registration</Checkbox>
            </Modal>
        </>
    );
}