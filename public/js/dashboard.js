const deleteBlog = document.querySelector(".delete");

deleteBlog.addEventListener("click", async function (e) {
  e.preventDefault();
  const deleteInput = confirm(
    "Are you sure you want to delete this blog? This action cannot be undone!!!",
  );

  if (deleteInput) {
    console.log("Clicked");
    await fetch(`/delete/${this.dataset.id}`, { method: "DELETE" });
  }

  window.location.reload();
});
