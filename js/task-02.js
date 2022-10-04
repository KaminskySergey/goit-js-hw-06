const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ulEl = document.querySelector('#ingredients');

const elements = ingredients.map(i => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = i;
    

    return itemEl;
});

ulEl.append(...elements);

console.log(elements);



