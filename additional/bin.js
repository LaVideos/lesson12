// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let products = [
    {
        name: 'Stick of Truth',
        amount: 1,
        price: '999999999',
        img_: 'https://www.pngplay.com/wp-content/uploads/12/Walking-Stick-PNG-Pic-Background.png'
    },
    {
        name: 'Kenny`s suit',
        amount: 38,
        price: '28.99',
        img_: 'https://content2.rozetka.com.ua/goods/images/original/172856506.jpg'
    },
    {
        name: 'RG-400 Smart Towel',
        amount: 1,
        price: '3299.99',
        img_: 'https://cdn.shopify.com/s/files/1/0134/1623/5065/products/image_fffa0d4a-94e3-4e1c-b7e9-b17558ba5f16_800x.jpg?v=1646855823'
    },
    {
        name: 'Chinpokomon',
        amount: 533,
        price: '12.99',
        img_: 'https://i.imgur.com/pHqhVfx_d.webp?maxwidth=520&shape=thumb&fidelity=high'
    },
]
const mainDiv = document.getElementById('mainBlock');
for (let i = 0; i < products.length; i++) {
    const div = document.createElement('div');
    const btn = document.createElement('button');

    div.classList.add('base');

    btn.innerHTML = `Buy`;

    for (const item in products[i]) {
        const lDiv = document.createElement('div');
        switch (item) {
            case 'name':
                lDiv.innerHTML = `${products[i][item]}`
                lDiv.classList.add('name_');
                break;
            case 'amount':
                lDiv.innerHTML = ` Amount - ${products[i][item]}pc`
                lDiv.classList.add('amount');
                break;
            case 'price':
                lDiv.innerHTML = `Price - <span class="priceNum">${products[i][item]}$</span>`
                lDiv.classList.add('price');
                break;
            case 'img_':
                lDiv.innerHTML = `<img src="${products[i][item]}" alt="">`;
        }

        div.append(lDiv);
    }
    div.append(btn);
    mainDiv.append(div);
}
document.body.append(mainDiv);


let setClass = (el, className_) => {
    for (let i = 0; i < el.length; i++) {
        el[i].classList.add(`${className_}${i}`);
    }
}

const button = document.getElementsByTagName('button');
setClass(button, 'btn');


const arr = [];
for (let i = 0; i < products.length; i++) {
    let button = document.getElementsByClassName(`btn${i}`)[0];

    button.onclick = function () {
        arr.push(products[i]);
        localStorage.setItem('Buy', JSON.stringify(arr));
    }
}
