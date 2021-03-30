import {RootState, UserState} from "../../../store/store";
import {column, FormDataInterface, ProfileInterface, UserInterface} from "../../../types/types";
import {Key} from "antd/es/table/interface";


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

export const getFormData = (): FormDataInterface[] => {
    return [
        {
            label: "Name",
            name: "name",
            message: "Enter your username",
        },
        {
            label: "City",
            name: "city",
            message: "Enter your city",
        },
        {
            label: "Age",
            name: "age",
            message: "Enter your age",
        },
        {
            label: "Birthday",
            name: "birthday",
            message: "Enter your birthday",
            datePicker: true
        }
    ]
}

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

export const getProfilesName = (profiles: ProfileInterface[]): Key[] => {
    return profiles.map(profile => profile.name) as Key[];
}

export const getUsersEmailsExceptCurrent = (currentUser: UserState):Key[] => {
    return currentUser.allUsers
        .filter((user:UserInterface) => user.email !== currentUser.userCredential?.email)
        .map((user:UserInterface) => user.email) as Key[];
}

export const validateCredentials = (credential: ProfileInterface): boolean => {
    const isValidAge = typeof credential.age === "number" && credential.age > 0;
    return isValidAge;
}