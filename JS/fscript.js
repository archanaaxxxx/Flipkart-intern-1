// Category Active Effect

const categories = document.querySelectorAll(".category");

categories.forEach(category => {

  category.addEventListener("click", () => {

    categories.forEach(item => {
      item.classList.remove("active");
    });

    category.classList.add("active");

  });

});