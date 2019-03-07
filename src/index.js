import * as api from './api/index.js';
import * as loading from './loading/index.js';

api.login('Vasa', 'vasa123')
    .then(data => {
        console.log('data', data);
    })

api.getCookies();

loading.startLoading();
