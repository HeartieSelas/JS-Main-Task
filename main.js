// var emailError = document.getElementById('email-error');
// var passwordError = document.getElementById('password-error');
// var submitError = document.getElementById('submit-error');

// function validateEmail(){
//     var email = document.getElementById('contact-email').value;

//     if(email.length == 0){
//         emailError.innerHTML = "Email is required"
//         return false;
//     }
//     if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
//         emailError.innerHTML = "Email Invalid"
//         return false;
//     }

//     emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
//     return true;
// }

// function validatePassword(){
//     var password = document.getElementById('center-password').value;

//     if(password.length == 0){
//         passwordError.innerHTML = "Password is required"
//         return false;
//     }
//     if(!password.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
//         passwordError.innerHTML = "Password length is Small"
//         return false;
//     }

//     passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
//     return true;
// }







// const inputBox = document.getElementById("input-box");
// const listContainer = document.getElementById("list-container");

// function addTask(){
//     if(inputBox.value === ''){
//         alert("You must write something!");
//     }
//     else{
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//     }
//     inputBox.value = "";
//     saveData();
// }

// listContainer.addEventListener("click", function(e){
//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         saveData();
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);

// function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML);
// }
// function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showTask();












// var emailError = document.getElementById('email-error');
// var passwordError = document.getElementById('password-error');
// var submitError = document.getElementById('submit-error');

// function validateEmail(){
//     var email = document.getElementById('contact-email').value;

//     if(email.length == 0){
//         emailError.innerHTML = "Email is required"
//         return false;
//     }
//     if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
//         emailError.innerHTML = "Email Invalid"
//         return false;
//     }

//     emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
//     return true;
// }

// function validatePassword(){
//     var password = document.getElementById('center-password').value;

//     if(password.length == 0){
//         passwordError.innerHTML = "Password is required"
//         return false;
//     }
//     if(!password.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
//         passwordError.innerHTML = "Password length is Small"
//         return false;
//     }

//     passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
//     return true;
// }







const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();






///

function login(){

if(document.Formfill.Email.value==""){
    document.getElementById("result").innerHTML="Enter Your Email*";
    return false;
}
else if(document.Formfill.Password.value==""){
    document.getElementById("result").innerHTML="Enter Your Password*";
    return false;
}

}

//



function validation(){
    if(document.Formfill.Username.value==""){
        document.getElementById("result").innerHTML="Enter Username*";
        return false;
    }
    else if(document.Formfill.Username.value.length<6){
        document.getElementById("result").innerHTML="Atleast six letters*";
        return false;
    }
    else if(document.Formfill.Email.value==""){
        document.getElementById("result").innerHTML="Enter Your Email*";
        return false;
    }
    else if(document.Formfill.Password.value==""){
        document.getElementById("result").innerHTML="Enter Your Password*";
        return false;
    }
    else if(document.Formfill.Password.value.length<6){
        document.getElementById("result").innerHTML="Password must be 6-Digits*";
        return false;
    }
    else if(document.Formfill.CPassword.value==""){
        document.getElementById("result").innerHTML="Enter Confirm Password*";
        return false;
    }
    else if(document.Formfill.CPassword.value!==document.Formfill.Password.value){
        document.getElementById("result").innerHTML="Password does not Match*";
        return false;
    }
    // else if(document.Formfill.Password.value==document.Formfill.CPassword.value){
    //     popup.classList.add("open-slide")
    //     return false;
    // }
}
// var popup=document.getElementById('popup');
// function CloseSlide(){
//     popup.classList.remove("open-slide")
// }


///


// var email = document.forms['formfill']['Email']; 
// var password = document.forms['formfill']['Password']; 

// var email-error = document.getElementById('email-error');
// var password-error = document.getElementById('password-error');

// function validation(){
//     if(email.value.length < 9){
//         email.style.border = "1px solid red";
//         email.focus();
//         return false;
//     }
// }




///

// function auth(){
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     if(email== "admin@gmail.com" && password=="admin123"){
//         window.location.assign("project02.html");
//         alert("Login Successfully");
//     }
//     else{
//         alert("Invalid Information");
//         return;
//     }
// }
