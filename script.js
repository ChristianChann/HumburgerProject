 let HamburgerContainerTag = document.querySelector(".hamburgerContainer")

 let line1Tag = document.querySelector(".line1");
 let line2Tag = document.querySelector(".line2");
 let line3Tag = document.querySelector(".line3");
 let colorChangeTag = document.querySelector(".colorChange");
 let liTag = document.getElementsByTagName("li");
 const test = document.getElementsByClassName("test")[0];
 HamburgerContainerTag.addEventListener("click",()=>{
    if(HamburgerContainerTag.classList.contains("isopened")){
    line2Tag.classList.remove("hideLine2"); 
   line1Tag.classList.remove("degreeLine1"); 
   line3Tag.classList.remove("degreeLine3");
   HamburgerContainerTag.classList.remove("isopened")
   test.style.transform = "translateY(400px)"
   test.style.transition = "all 2s ease"
   colorChangeTag.classList.remove("showOverLayMenu");
   // for(let i =0; i<liTag.length; i++){
   //  liTag[i].classList.remove("liMoveTag")
   // }
    }
    else{
   colorChangeTag.classList.add("showOverLayMenu");
   line2Tag.classList.add("hideLine2"); 
   line1Tag.classList.add("degreeLine1"); 
   line3Tag.classList.add("degreeLine3");
   HamburgerContainerTag.classList.add("isopened")
   // for(let i =0; i<liTag.length; i++){
   //  liTag[i].classList.add("liMoveTag")
   // }
      test.style.transform = "translateY(0px)"
      test.style.transition = "all 2s ease"
    }   
 })