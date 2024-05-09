//////////////////////////////////////////////////////////////////////////////////////////////////LOGO
////////////Caixas//////////////////////////////////
var div_l=document.querySelector("#c1");
var div_2=document.querySelector("#c2");
var div_3=document.querySelector("#d");
var div_4=document.querySelector("#m");

////////////EVENTOS///////////////////
//////////ESCOLHA DE LETRAS MOUSE///////////////////

div_l.onmouseenter = function() {
    mudar(".logo #c1 img")};
    div_2.onmouseenter = function() {
        mudar(".logo #c2 img")};
        div_3.onmouseenter = function() {
            mudar(".logo #d img")};
            div_4.onmouseenter = function() {
                mudar(".logo #m img")};

////////////////Função para trocar letra/////////////////
function mudar(letra){
    var letra=document.querySelectorAll(letra);

    //Numero de letra aleatório
    var random = Math.floor(Math.random() * letra.length); 


    for (var i = 0; i < letra.length; i++) {
        
        if(letra[i].classList.contains("mostra") && i === random){           
            random = Math.floor(Math.random() * letra.length);
            while (i === random){
            random = Math.floor(Math.random() * letra.length);

        }};

            //Esconde a letra atual
            letra[i].classList.remove("mostra");
            letra[i].classList.add("esconder");
                };

    
     //Revela a nova letra
   
    letra[random].classList.remove("esconder");
    letra[random].classList.add("mostra"); 

};