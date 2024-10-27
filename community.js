function Commend() {
    const userInput = document.getElementById("text").value;
    const text2Div = document.getElementById("text2");
    if (userInput.trim() !== "") {
        const newMessage = document.createElement("p");
        newMessage.textContent = userInput;
        newMessage.style.margin = "5px 0"; 

        text2Div.appendChild(newMessage);

        document.getElementById("text").value = "";
    }
}
function toggleLike(button) {
    button.classList.toggle("liked"); 
}