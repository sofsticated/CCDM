//////////////////////////////////////////////////////////ORADORES
///////////////////////////////SETAS////////////////
var foto= document.querySelectorAll(".slides .slide_fade");
var botoespre=document.querySelector(".botoespre");
var botoesnext=document.querySelector(".botoesnext");

botoespre.addEventListener("click", function(){
    counter-= 1;
    slide(counter);
});

botoesnext.addEventListener("click", function(){
    counter+= 1;
    slide(counter);
});


let counter= 1; 
slide(counter);


function slide(n){

    for(var i=0; i<foto.length;i++){
        foto[i].classList.remove("revelar");
    }

    if(n<1){
        counter=foto.length; 
    }
    if(n>foto.length){
        counter=1;
    }

    foto[counter-1].classList.add("revelar");
};

