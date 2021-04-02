import {UserState} from "../../../types/types";
import {column, FormDataInterface, ProfileInterface, UserInterface} from "../../../types/types";
import {Key} from "antd/es/table/interface";
import {DatePicker, Input} from "antd";


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
    }, {
        title: "Owner",
        dataIndex: "email",
        key: "email"
    }
];

export const getFormData = (): FormDataInterface[] => {
    return [
        {
            label: "Name",
            name: "name",
            message: "Enter your username",
            inputComponent: Input
        },
        {
            label: "City",
            name: "city",
            message: "Enter your city",
            inputComponent: Input
        },
        {
            label: "Age",
            name: "age",
            message: "Enter your age",
            inputComponent: Input
        },
        {
            label: "Birthday",
            name: "birthday",
            message: "Enter your birthday",
            inputComponent: DatePicker
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

export const appendOwner = (user: UserState) => {
    const profiles: ProfileInterface[] = user.allProfiles;
    return profiles.map((profile: ProfileInterface) => {

        const owner: UserInterface = user.allUsers.filter((user: UserInterface) => {
            // console.log(user.id, profile);
            return user.id === profile.user
        })[0]
        return {
            ...profile,
            email: owner?.email
        }
    })
}

export const getUsersEmailsExceptCurrent = (currentUser: UserState): Key[] => {
    return currentUser.allUsers
        .filter((user: UserInterface) => user.email !== currentUser.userCredential?.email)
        .map((user: UserInterface) => user.email) as Key[];
}

export const validateCredentials = (credential: ProfileInterface): boolean => {
    console.log(typeof credential.age)
    const isValidAge =
        typeof credential.age === "number"
        && credential.age >= 0 ;
    return isValidAge;
}