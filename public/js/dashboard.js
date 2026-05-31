const deleteBlog = document.querySelectorAll(".delete");
const btnSort = document.querySelector(".sorting");

// Delete Blog
deleteBlog.forEach(function (deleteButton) {
  deleteButton.addEventListener("click", async function (e) {
    e.preventDefault();
    const deleteInput = confirm(
      "Are you sure you want to delete this blog? This action cannot be undone!!!",
    );

    if (deleteInput) {
      await fetch(`/delete/${this.dataset.id}`, { method: "DELETE" });
      window.location.reload();
    }
  });
});

// Method to Sort
btnSort.addEventListener("click", function (e) {
  const list = document.querySelector(".list-blogs");
  const items = Array.from(list.children);

  items.reverse().forEach((item) => list.appendChild(item));
});
