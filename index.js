var carousel = document.querySelector(".carousel");
var image = document.querySelector(".carousel-img");
var left = document.querySelector(".swipe-left");
var right = document.querySelector(".swipe-right");

var counter = 1;

right.addEventListener("click",function (e){
    counter += 1;
    console.log(counter);
    if(counter === 10 ){
        counter = 1;
    }
    var path = "/Images/Carousel/"+counter+".jpg";
    image.setAttribute("src",path);
    image.classList.add("carousel-img-animate");
    const timeout = setTimeout(function(){
        image.classList.remove("carousel-img-animate");
    },200);
   

});


left.addEventListener("click",function (e){
    counter -= 1;
    console.log(counter);
    if(counter === 0){
        counter = 9;
    }
    var path = "/Images/Carousel/"+counter+".jpg";
    image.setAttribute("src",path);
});

// For Welcome Flash

// var flash = document.querySelector(".welcome");

// // document.addEventListener("load", function (){
//     const timeout = setTimeout(function(){
//         flash.classList.remove("welcome");
//     },4000);
// })
