// let login=document.querySelector("#login");
// let signup=document.querySelector("#signup");
// login.addEventListener("click",loginfun);
// function loginfun(){
//     document.write(55+44);

// }
// signup.addEventListener("click",signupfun);
//     function signupfun(){
//         document.querySelector("#easy").style.display="grid"
//     }
// document.write()

{/* <i class="fa-solid fa-snowman"></i>
<i class="fa-solid fa-user-check"></i> */}
// -----------------sign in sign up script--------------

let login=document.querySelector("#login");
login.addEventListener("click",loginfun);
let signup=document.querySelector("#signup");
signup.addEventListener("click",signupfun);
signInGreen=document.querySelector("#signInGreen");
signOutRed=document.querySelector("#signOutRed");

let status=JSON.parse(localStorage.getItem("status"))||[];

if(status.length>0){
   
    login.innerText=status[1];
    signup.style.display="none";
    signInGreen.style.display="Inline-block";
    signOutRed.style.display="Inline-block";

    
  }



function loginfun(){
  
    window.location.href="./signin/signin.html";
   
   
}

function signupfun(){
   
   
    window.location.href="./signupPage/signUP.html";
   
   
}

document.querySelector("#signOutRed").addEventListener("click",function(){
    status=[];
    localStorage.setItem("status", JSON.stringify(status));
    alert("Sign Out Successful!");
    window.location.href="./index.html";
  });


