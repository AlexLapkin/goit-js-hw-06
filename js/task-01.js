const liItemArr = document.querySelectorAll('.item');        
console.log(`Numbers of categories: ${liItemArr.length}`);   

liItemArr.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});