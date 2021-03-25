import {UserState} from "../../../store/store";
import {ProfileInterface, UserInterface} from "../../../types/types";

interface column {
    title: string,
    dataIndex: string,
    key: string
}

export const adminDataTableColumns: column[] = [
    {
        title: 'Users',
        dataIndex: 'users',
        key: 'users'
    },
    {
        title: 'Profiles',
        dataIndex: 'profiles',
        key: 'profiles'
    },
    {
        title: "Older then 18",
        dataIndex: 'older',
        key: 'older'
    }
]

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
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Password',
        dataIndex: 'password',
        key: 'password',
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
];

export const organizeData = (user: UserState) => {
    const userQuantity = user.allUsers.length;
    const profileQuantity = user.allProfiles.length;
    const older = user.allProfiles
        .filter((profile: ProfileInterface) => profile.age as number > 18).length;
    return [{
        users: userQuantity,
        profiles: profileQuantity,
        older: older
    }]
}

export const getUsersEmails = (users: UserInterface[]) => {
    return users.map((user:UserInterface) => user.email);
}