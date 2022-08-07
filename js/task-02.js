const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
const newArr = [];

ingredients.forEach(ingredients => {
  const item = document.createElement('li')
  item.className = 'items'
  item.textContent = ingredients
  newArr.push(item)
});
list.append(...newArr);
console.log(newArr);
