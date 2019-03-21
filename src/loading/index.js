const renderLoadingText = text => {
    if (text.includes('.')) {
        return text.slice(0, -1)
    } else {
        return 'Loading...'
    }
}

let loadingUpdate = null;
const loadingElement = document.querySelector('.loading')

const startLoading = () => {
    clearInterval(loadingUpdate)
    loadingElement.hidden = false;

    loadingUpdate = setInterval(() => {
        loadingElement.innerText = renderLoadingText(loadingElement.innerText)
    }, 500)
}

const stopLoading = () => {
    clearInterval(loadingUpdate)
    loadingElement.hidden = true;
}

export default { startLoading, stopLoading }
