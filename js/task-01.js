const list = document.querySelectorAll('li.item');

console.log(`У списку ${list.length} категорій.`);

const ul = document.querySelectorAll('#categories>li')
ul.forEach(el => 
    {console.log(
        `Категорія: ${el.firstElementChild.textContent}, Кількість елементів: ${el.lastElementChild.children.length}`
        );
    });