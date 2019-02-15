const cookies = [
    {
        id: 1,
        name: 'Печенье «Ми–Ни» с шоколадным вкусом (коробка 4 кг)',
        cost: '813,96 ₽',
        description: 'Классическое сахарное печенье с прослойкой из воздушного суфле с шоколадным вкусом',
        img: 'https://01.kdvonline.ru/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/u/r/ur107.jpeg',
    },
    {
        id: 2,
        name: '«Пряничное печенье», сдобное пряничное печенье со вкусом мёда, 223 г',
        cost: '37 ₽',
        description: 'Печенье, приготовленное из пряничного теста с добавлением изюма, пряностей и рождественским медовым ароматом.',
        img: 'https://01.kdvonline.ru/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/j/a/jap330.jpeg',
    },
    {
        id: 3,
        name: 'Рассыпчатое сахарное печенье с добавлением какао.',
        cost: '33,03 ₽',
        description: 'Рассыпчатое сахарное печенье с добавлением какао. ',
        img: 'https://01.kdvonline.ru/media/catalog/product/cache/2/image/300x300/9df78eab33525d08d6e5fb8d27136e95/m/p/mp439.jpeg',
    },
]

const getCookies = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cookies)
        }, 1000)
    })
}