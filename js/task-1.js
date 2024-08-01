const category = document.querySelector('#categories');
console.log("Number of categories:", category.childElementCount);

const categoryTitle = document.querySelectorAll('.item');
let item = categoryTitle;
categoryTitle.forEach(item => {
    console.log("Category:", item.firstElementChild.textContent); 
    console.log("Elements:", item.lastElementChild.childElementCount);
});

