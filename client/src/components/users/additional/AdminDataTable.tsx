import React, {useEffect, useState} from 'react';
import {Table} from "antd";
import {adminDataTableColumns, organizeData} from './service';
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

export const AdminDataTable: React.FC = () => {

    const user = useSelector((store: RootState) => store.user);
    return (
        <Table
            className="form-padding"
            columns={adminDataTableColumns}
            dataSource={organizeData(user)}
        />
    )
}