import api from './api'

api.user.login('Vasa', 'vasa123')
    .then(data => {
        console.log('data', data);
    })

api.cookie.getCookies()
