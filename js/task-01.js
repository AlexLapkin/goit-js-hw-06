// Варіант 1 - Статичний метод через querySelector
const liItemArr = document.querySelectorAll('.item');        
console.log(`Numbers of categories: ${liItemArr.length}`);   

liItemArr.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});

// Варіант 2 - Дінамічний метод через getElements
const liClassItem = document.getElementsByClassName('item');    
console.log(`Numbers of categories: ${liClassItem.length}`);

[...liClassItem].forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});