const fileInput = document.getElementById("file-input");
const fileButton = document.getElementById("file-btn");
const mediaContainer = document.getElementById("media-container");

fileButton.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (e) => {
  if (!e.target.files.length) return;
  var reader = new FileReader();
  const file = e.target.files[0];

  reader.onload = function (e) {
    if (file.type.includes("image")) {
      mediaContainer.innerHTML = `<img
        src="${e.target.result}"
        alt="Post image"
        draggable="false"
      />`;
    } else if (file.type.includes("video")) {
      mediaContainer.innerHTML = ` <video src="${e.target.result}" controls></video>`;
    }
  };

  reader.readAsDataURL(e.target.files[0]);
});
