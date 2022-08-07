const inputCheck = document.querySelector("#validation-input");
const checkThis = Number(inputCheck.dataset.length);
console.log(checkThis);

inputCheck.addEventListener("blur", () => {
    if (inputCheck.value.length < checkThis) {
        inputCheck.classList.add("invalid");
        inputCheck.classList.remove("valid");

    }
    else {
        inputCheck.classList.remove("invalid");
        inputCheck.classList.add("valid");
    }
    console.log(inputCheck.value.length);
})



	