export const promiseMethod = method => (...props) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(method(...props))
        }, 1000)
    })
}