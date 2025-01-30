function greetUser() {
    let name = document.getElementById('nameInput').value.trim();
    let greetingMessage = document.getElementById('greetingMessage');
    let errorMessage = document.getElementById('errorMessage');
    
    if (name === "") {
        greetingMessage.style.opacity = 0;
        errorMessage.textContent = "Please enter your name before greeting!";
    } else {
        errorMessage.textContent = "";
        greetingMessage.textContent = `Hello, ${name}! Welcome to our site.`;
        greetingMessage.style.opacity = 1;
    }
}