const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
window.addEventListener("resize",()=>{
    b1.style.width=(window.innerWidth*0.5)+"px";
    b1.style.height=(window.innerHeight*0.2)+"px";

    b2.style.width=(window.innerWidth*0.3)+"px";
    b2.style.height=(window.innerHeight*0.5)+"px";
})
