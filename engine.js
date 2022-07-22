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

let status=JSON.parse(localStorage.getItem("status"))||[];
console.log(status[1])
if(status.length>0){
   
    login.innerText=status[1];
    signup.style.display="none";
    
  }



function loginfun(){
  
    window.location.href="./signin/signin.html";
   
   
}

function signupfun(){
   
   
    window.location.href="./signupPage/signUP.html";
   
   
}


