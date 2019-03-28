import loading from './loading/index.js';
import user from './user/index.js';

const user1 = user.initUser();

const handleClick = () => {
  user.logout();
}

document.querySelector('.logout').addEventListener('click', handleClick);

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getUserData = async (token) => {
    await timeout(1000)
    console.log('Step 3');
    if (token === '1') {
        return 'User data'
    } else {
        throw 'Token not valid!'
    }
}

console.log('Step 1');

(async () => {
    try {
        console.log('Step 2');
        loading.startLoading();
        const data = await getUserData('1');
        console.log('Step 2.1');
        const sussesText = document.querySelector('.susses')
        sussesText.innerText = data
    } catch (text) {
        const errorText = document.querySelector('.error')
        errorText.innerText = text;
    }

    loading.stopLoading();
})()

console.log('Step 4');
const img = document.querySelector('.img')
img.src = 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg'
