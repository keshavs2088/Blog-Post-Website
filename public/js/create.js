const form = document.querySelector("form");
const uploadedFile = document.querySelector("#img-blog");
const previewImage = document.querySelector(".img-upload img");

const quill = new Quill("#editor", {
  theme: "snow",
  placeholder: "Write your blog content here...",
});

const hiddenContent = document.getElementById("content").value;

if (hiddenContent) {
  quill.root.innerHTML = hiddenContent;
}

form.addEventListener("submit", function () {
  document.querySelector("#content").value = quill.root.innerHTML;
});

uploadedFile.addEventListener("change", function () {
  const file = uploadedFile.files[0];
  if (!file) return;
  previewImage.src = URL.createObjectURL(file);
});
