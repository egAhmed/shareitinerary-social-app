const modalExit = document.getElementById("modal-exit");
const modalPost = document.getElementById("modal-post");

const modalCreate = document.getElementById("modal-create");
const modalCreateExit = document.getElementById("modal-create-exit");

const body = document.body;
modalExit.addEventListener("click", (e) => {
  modalPost.classList.remove("backdrop--show");
  body.style.overflow = "auto";
});

function showModal() {
  modalPost.classList.add("backdrop--show");
  body.style.overflow = "hidden";
}

modalCreateExit.addEventListener("click", (e) => {
  modalCreate.classList.remove("backdrop--show");
  body.style.overflow = "auto";
});

function showModalCreate() {
  modalCreate.classList.add("backdrop--show");
  body.style.overflow = "hidden";
}
