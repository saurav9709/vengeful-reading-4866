

  var collParent = document.querySelector("#listMenu");
    let navbar=document.querySelector("#navbar");
  document.querySelector(".Xcontainer").addEventListener("click",function(){
  if (collParent.style.display === "inline-block") {
    collParent.style.display = "none";
    } else {
      collParent.style.display = "inline-block";
    };
    // navbar.style.gridTemplateRows= "repeat(7,1fr)";
    



   
  
  });

  
  function myFunction(x) {
    x.classList.toggle("change");
  
  }



  var coll = document.getElementsByClassName("collapsible");


for ( let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    // console.log(coll)
    var content = this.nextElementSibling;
    // let child=this.children;
    
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}