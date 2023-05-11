const stack = document.querySelector(".stack");
const grid = document.querySelector(".grid");
const article = document.querySelectorAll(".article");
const para = document.querySelector(".para");

// const art = document.getElementsByTagName("article");
// console.log(article);
console.log(article);
console.log(grid);
console.log(stack);

stack.addEventListener("click", () => {
  para.classList.toggle("para-red");
  article.forEach((art) => {
    art.classList.add("stack");
  });
  console.log("hey");
});
grid.addEventListener("click", () => {
  article.forEach((art) => {
    art.classList.remove("stack");
  });
});
