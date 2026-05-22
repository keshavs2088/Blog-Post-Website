const quill = new Quill("#editor", {
  theme: "snow",
  placeholder: "Write your blog content here...",
});

const form = document.querySelector("form");

form.addEventListener("submit", function () {
  document.querySelector("#content").value = quill.root.innerHTML;
});
