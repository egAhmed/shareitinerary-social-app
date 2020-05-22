const modalExit = document.getElementById("modal-exit");
const modalPost = document.getElementById("modal-post");

const body = document.body;
modalExit.addEventListener("click", (e) => {
  modalPost.classList.remove("backdrop--show");
  body.style.overflow = "auto";
});

function showModal() {
  modalPost.classList.add("backdrop--show");
  body.style.overflow = "hidden";
}
