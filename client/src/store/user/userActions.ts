export const LOAD_USER_PROFILES = "LOAD_USER_PROFILES";

export const loadUser = () => {
    return {
        type: LOAD_USER_PROFILES, payload: [{
            key: '1',
            name: 'John Brown',
            age: 32,
            email:'example@email.com',
            password:'password',
            role: 'user',
            city:'kiev',
            birthday:'XX.XX.XXXX',
            gender:'male',

        },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                email:'example@email.com',
                password:'password',
                role: 'user',
                city:'kiev',
                birthday:'XX.XX.XXXX',
                gender:'male',
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                email:'example@email.com',
                password:'password',
                role: 'user',
                city:'kiev',
                birthday:'XX.XX.XXXX',
                gender:'male',
            }]
    }
}
