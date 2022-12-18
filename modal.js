const btnOpenModal = document.querySelector("#open-modal")
const modalWrapper = document.querySelector(".modal-wrapper")

btnOpenModal.onclick = () => {
    modalWrapper.classList.remove("invisible")
}

document.addEventListener("keydown", (event) => {
    event.key === "Escape" ? modalWrapper.classList.add("invisible") : null
})