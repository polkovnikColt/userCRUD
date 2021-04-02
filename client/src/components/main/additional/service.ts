import {column, ProfileInterface, UserState} from "../../../types/types";
import {Key} from "antd/es/table/interface";

export const columns: column[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
    },
    {
        title: 'Birthday',
        dataIndex: 'birthday',
        key: 'birthday',
    },
    {
        title:"Owner",
        dataIndex:"email",
        key:"email"
    }
];

export const appendOwner = (user:UserState) => {
   const profiles:ProfileInterface[] = user.userProfiles;
   return profiles.map((profile:ProfileInterface) => {
      return { ...profile, email: user.userCredential?.email}
   })
}

export const getProfilesName = (profiles:ProfileInterface[]):Key[]  => {
    return profiles.map(profile => profile.name) as Key[];
}