const form = document.querySelector("form");
const uploadedFile = document.querySelector("#img-blog");
const previewImage = document.querySelector(".img-upload img");
const hiddenContent = document.getElementById("content").value;
const title = document.getElementById("title");
const content = document.getElementById("content");

const quill = new Quill("#editor", {
  theme: "snow",
  placeholder: "Write your blog content here...",
});

if (hiddenContent) {
  quill.root.innerHTML = hiddenContent;
}

// Validation for empty fields
form.addEventListener("submit", function (e) {
  content.value = quill.root.innerHTML;

  if (!title.value.trim() || quill.getText().trim() === "") {
    alert("All fields are rquired");
    e.preventDefault();
  }
});

// Method to change the image
uploadedFile.addEventListener("change", function () {
  const file = uploadedFile.files[0];
  if (!file) return;
  previewImage.src = URL.createObjectURL(file);
});
