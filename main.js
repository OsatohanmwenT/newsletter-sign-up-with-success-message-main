const newsLetterInput = document.getElementById("newsletter-input")
const subscribeBtn = document.getElementById("subscribe-btn")
const userText = document.getElementById("user")
const errorText = document.getElementById("error-text")

const validate = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (input.trim() === "") {
        return false; // Empty input
    } else {
        return emailRegex.test(input);
    }
}


subscribeBtn.addEventListener("click", () => {
    if(!validate(newsLetterInput.value)){
        errorText.innerHTML = "Vaild email required"
        newsLetterInput.classList.add("error")
        newsLetterInput.classList.add("error-border")
    }else{
        localStorage.setItem("userEmail", newsLetterInput.value);
        window.location.href = "success.html";
        newsLetterInput.value = ""
    }
}
)

window.onload = () =>{
    userText.innerHTML = newsLetterInput.value
}