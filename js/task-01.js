// 1.)
// const allCategoryItemEl = document.querySelectorAll('.item');
// console.log(`Number of categories: ${allCategoryItemEl.length}`);


// // 2.)
// const titleEl = document.querySelectorAll('h2');
// console.log(`Category: ${allCategoryItemEl[0].firstElementChild.textContent}`);

// const listElemenstEl = document.querySelectorAll('.item ul');
// console.log(`Elements: ${listElemenstEl[0].children.length}`);


// console.log(`Category: ${allCategoryItemEl[1].firstElementChild.textContent}`);
// console.log(`Elements: ${listElemenstEl[1].children.length}`);

// console.log(`Category: ${allCategoryItemEl[2].firstElementChild.textContent}`);
// console.log(`Elements: ${listElemenstEl[2].children.length}`);


const allCategoryItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategoryItemEl.length}`);


const titleRef = document.querySelectorAll('h2');
console.log(`Category: ${titleRef[0].textContent}`);
const listElemRef = document.querySelectorAll('.item ul');
console.log(`Elements: ${listElemRef[0].children.length}`);

console.log(`Category: ${titleRef[1].textContent}`);
console.log(`Elements: ${listElemRef[1].children.length}`);

console.log(`Category: ${titleRef[2].textContent}`);
console.log(`Elements: ${listElemRef[2].children.length}`);