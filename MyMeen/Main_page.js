 
 var numbers = document.getElementsByClassName("number");
 var arr = [...numbers];

 arr.forEach((element, index) => {
    element.addEventListener("click", () => {
        element.style.opacity = "1";


        arr
         .filter(function (item) {
           return item != element;
          })
         .forEach((item) => {
          item.style.opacity = "0";
         });
    });
});


let heart = document.getElementsByName("heartx");
heart.forEach(qalb => {
  qalb.addEventListener("click", mouseclick);
  function mouseclick(){
    qalb.style.fontSize = "40px";
  }
})


let heartmel = document.querySelector(".image_one");
heartmel.style.zIndex = "-1";
let clickTime = 0;

heartmel.addEventListener("click", (e) => {
  console.log("heartmel");
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      heartme(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

let heartme = (e) => {
let createHeart = document.createElement("i");
createHeart.classList.add("fa");
createHeart.classList.add("fa-heart");


let x = e.clientX;
let y = e.clientY;

let leftOffset = e.target.offsetLeft;
let topOffset = e.target.offsetTop;

let xInside = x - leftOffset;
let yInside = y - topOffset;

createHeart.style.top = `${yInside}px`;
createHeart.style.left = `${xInside}px`;

document.querySelector(".image_one").appendChild(createHeart);

//setTimeout(() => createHeart.remove(), 1000);
//console.log(heartme)
};


function createinput(){
let bubble = document.getElementsByName("bubble");
bubble[0].style.color = "blue";
document.getElementById("inputone").style.visibility = "visible"
}

function removeinput(){
let bubble = document.getElementsByName("bubble");
bubble[0].style.color = "black"
}

function createinput2(){
let bubble = document.getElementsByName("bubble");
bubble[1].style.color = "blue"
document.getElementById("inputtwo").style.visibility = "visible"

}
  
function removeinput2(){
let bubble = document.getElementsByName("bubble");
bubble[1].style.color = "black"
}


function createinput3(){
let bubble = document.getElementsByName("bubble");
bubble[2].style.color = "blue"
document.getElementById("inputthree").style.visibility = "visible"

}
    
function removeinput3(){
let bubble = document.getElementsByName("bubble");
bubble[2].style.color = "black"
}