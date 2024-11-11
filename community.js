function Commend(button) {
    const articleElement = button.closest(".commend2");
    const userInput = articleElement.querySelector(".text-input").value;
    const text2Div = articleElement.querySelector(".text2");

    if (userInput.trim() !== "") {
        const newMessage = document.createElement("p");
        newMessage.textContent = userInput;
        newMessage.style.margin = "5px 0"; 

        text2Div.appendChild(newMessage);

        articleElement.querySelector(".text-input").value = "";
    }
}
function toggleLike(button) {
    button.classList.toggle("liked"); 
}
