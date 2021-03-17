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
            gender:'male',
            tags: ['nice', 'developer'],
        },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                email:'example@email.com',
                password:'password',
                role: 'user',
                gender:'male',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                email:'example@email.com',
                password:'password',
                role: 'user',
                gender:'male',
                tags: ['cool', 'teacher'],
            }]
    }
}
