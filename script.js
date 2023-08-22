document.addEventListener("DOMContentLoaded", function() {
  const menuCategories = ["Lunch", "Dinner", "Sushi", "Drinks", /* Add more categories */];

  const specialsTile = document.getElementById("specialsTile");
  specialsTile.addEventListener("click", redirectToRandomCategory);

  function redirectToRandomCategory() {
    const randomCategory = menuCategories[Math.floor(Math.random() * menuCategories.length)];
    window.location.href = `category/${randomCategory}.html`; // Update with your page structure
  }
});
