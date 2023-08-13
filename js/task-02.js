const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

ingredients.map((item, idx, arr) => {
  item = document.createElement('li');
  item.textContent = arr[idx];
  item.classList.add("item");
  list.append(item);
});
