let text= document.getElementById("inp");
let send=document.getElementById("btn");
function red(e){
    document.querySelector(".test").style.color=text.value;
}
send.addEventListener("click",red)






// send.onclick=console.log(text.value)

// function makeitred(e){
//     e.target.style.color="red";
// }

// let x = document.querySelector(".test");
// x.addEventListener("click",makeitred);


