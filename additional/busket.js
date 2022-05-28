const arr_ = localStorage.getItem('Buy');

const products = JSON.parse(arr_);

const mainDiv = document.getElementById('mainDiv');

// for (let i = 0; i < products.length; i++) {
//     const div = document.createElement('div');
//     const btn = document.createElement('button');
//
//     div.innerHTML = div.innerHTML = `Name - ${products[i].name}</br>Amount - ${products[i].amount}</br>Price - ${products[i].price}$</br><img src="${products[i].img_}" alt="">`;
//     div.classList.add(`div${i}`);
//     btn.innerHTML = `Delete`;
//     div.append(btn);
//     mainDiv.append(div);
// }


for (let i = 0; i < products.length; i++) {
    const div = document.createElement('div');
    const btn = document.createElement('button');

    btn.innerHTML = `Delete`;

    for (const item in products[i]) {
        const lDiv = document.createElement('div');
        div.classList.add(`div${i}`);
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

const button = document.querySelectorAll('div div button');
setClass(button, 'btn');

const all = document.getElementById('all');

for (let i = 0; i < products.length; i++) {
    let button = document.getElementsByClassName(`btn${i}`)[0];
    let div = document.getElementsByClassName(`div${i}`)[0];


    button.addEventListener('click', function () {
        console.log(removeP(products[i].name));
        let r = removeP(products[i].name);
        localStorage.setItem('Buy', JSON.stringify(r));
        div.remove();
        button.remove();
    })
}

all.onclick = function () {
    let div = document.querySelectorAll(`div div`);
    for (const divElement of div) {
        divElement.remove();
    }
    localStorage.removeItem('Buy');
}


const removeP = someKey => {
    let products = localStorage.getItem('Buy');
    products = JSON.parse(products);

    const index = products.findIndex(product => product.name === someKey);

    if (index > -1) {
        products.splice(index, 1);
    }
    return products;
}








