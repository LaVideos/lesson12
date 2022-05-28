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

const form = document.getElementById('form');
const arr = [];

form.onsubmit = function (e){
    e.preventDefault()

    const name_ = document.getElementsByName('name_')[0];
    const amount = document.getElementsByName('amount')[0];
    const price = document.getElementsByName('price')[0];
    const img_ = document.getElementsByName('image')[0];

    good = {
        name_: name_.value,
        amount: amount.value,
        price: price.value,
        img_: img_.value,
    }

    arr.push(good);
    console.log(good);

    localStorage.setItem('Buy', JSON.stringify(arr));

    name_.value = '';
    amount.value = '';
    price.value = '';
    img_.value = '';
}
