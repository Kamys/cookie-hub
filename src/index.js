import loading from './loading'


const getUserData = (token) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (token === '1') {
                resolve();
            } else {
                reject('Token not valid!')
            }
        }, 1000)
    })
}

loading.startLoading();
const promise = getUserData('0');

promise.then(() => {
    loading.stopLoading();
})

promise.catch(text => {
    const errorText = document.querySelector('.error')
    errorText.innerText = text;
    loading.stopLoading();
})


const img = document.querySelector('.img')
img.src = 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg'


/*
.....
*/
