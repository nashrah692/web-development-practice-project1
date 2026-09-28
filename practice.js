let interaction1 = document.querySelector("input[type='text']")

interaction1.addEventListener("input", function() {
    interaction1.style.color = "white"
    interaction1.style.backgroundColor = "black"
})

let interaction2 = document.querySelector("input[type='email']")

interaction2.addEventListener("input", function() {
    interaction2.style.color = "white"
    interaction2.style.backgroundColor = "darkblue"
})

let interaction3 = document.querySelector("#signUpButton")

interaction3.addEventListener("click", function() {
    let heading = document.querySelector("h1")
    heading.textContent = "Welcome! You are now a member ;)"
    interaction3.textContent = "You have successfully Signed Up. Yayyy!"
})

let interaction4 = document.querySelector("#aboutBox")

interaction4.addEventListener("input", function() {
    interaction4.style.color = "white"
    interaction4.style.backgroundColor = "darkred"
})

let interaction5 = document.querySelector(".requirements")

interaction5.addEventListener("mouseover", function() {
    interaction5.style.color = "red"
})