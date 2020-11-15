const login = document.getElementById("login-btn");
const usertype = document.getElementById("user");

const customerInput= document.getElementById("projectid");
const username= document.getElementById("username");
const key =document.getElementById("pass");
const message =document.getElementById("msg");

message.innerHTML="This feature is still in development, it will be available very soon. Thank you.";
message.style.color="#ff4200";

usertype.addEventListener("click", ()=>{
    const user = usertype.options[usertype.selectedIndex].value;
    if(user=="Customer"){
        customerInput.style.display="inline";
        username.setAttribute("placeholder","refid");
        key.setAttribute("placeholder","refkey")

    }
    else {
        customerInput.style.display="none";
        username.setAttribute("placeholder","username");
        key.setAttribute("placeholder","password");
    }
});

login.addEventListener("click",(e)=>{
    e.preventDefault();
    //message.innerHTML="This feature is still in development, it will be available very soon. Thank you.";
    //message.style.color="#ff4200";
});

