import api from './api'
import loading from './loading'

api.user.login('Vasa', 'vasa123')
    .then(data => {
        console.log('data', data);
    })

api.cookie.getCookies()

loading.startLoading()
