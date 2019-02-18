import { promiseMethod } from './utils.js'

const users = [
    {
        id: 1,
        login: 'Vasa',
        password: 'vasa123',
        role: 'Admin',
        token: 'd3x23r34rd23e23',
    },
    {
        id: 2,
        login: 'Jek',
        password: 'jek123',
        role: 'Customer',
        token: 'jf3c4534rc4354sd',
    },
]

export const login = promiseMethod((login, password) => {
    const currentUser = users.find(user => user.login === login)
    if (currentUser) {
        if (currentUser.password === password) {
            return {
                data: {
                    message: `Добро пожаловать ${currentUser.login}`,
                    token: currentUser.token,
                }
            }
        }
        return {
            error: `Неверный пароль!`
        }
    }

    return {
        error: `Пользователь с логином ${login} не найден!`
    }
})

const getUserData = (token) => {
    const currentUser = users.find(user => user.token === token)

    if (currentUser) {
        return currentUser
    }

    return {
        error: `Несуществующий токен!`
    }
}