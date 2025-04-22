let threelines=document.querySelector("#three-lines")
let menu=document.querySelector(".hidden-menu")

let cross_btn=document.querySelector("#cancel-button")

let more_about_us=document.querySelector(".more-about-us")
let more_about_us_cancel_btn=document.querySelector(".more-about-us-cancel-btn")


let quantity=document.querySelector("#value")
let i=0;

let product_description_btn=document.querySelector("#product_desc")
let ship_and_return_btn=document.querySelector("#ship_and_return")
let div1=document.querySelector("#div1")
let div2=document.querySelector("#div2")

threelines.addEventListener("click",function(){
    menu.style.right="0"; 
})

cross_btn.addEventListener("click",function(){
    menu.style.right="-350px"; 
})

more_about_us.addEventListener("click",function(){
    more_about_us_cancel_btn.style.display="block";
})

more_about_us_cancel_btn.addEventListener("click",function(){
    more_about_us_cancel_btn.style.display="none";
})

function addition(){
   ++i;
   quantity.textContent=i;
  
}
function deletion(){
    if(i>0){
       --i;
       quantity.textContent=i;
    }
   
}
function displayDiv1(){
    div1.style.display="block";
    div2.style.display="none";
}

function displayDiv2(){
    div1.style.display="none";
    div2.style.display="block";
}