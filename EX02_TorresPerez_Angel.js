/*
EX02_Torres_Angel.js
Fet per Angel Torres Pérez
DAW2
*/

window.onload= function(){
   
    function generaResp(){
        let numAle = Math.floor(Math.random() * 3);
        return numAle;
    }
    let pedra = 0;
    let paper = 1;
    let tisores = 2;

    let contWin = 0;
    let contLose = 0;

    // DETECTAR SELECCIÓ DE RESPOSTA
    document.getElementById('Jugar').onclick = function(){
        if(document.querySelectorAll('input[type="radio"]:checked').length === 0){
            document.getElementById('resul1').innerHTML = `No has seleccionat cap opcio - HAS PERDUT`;
        }
        // OPCIO PEDRA
        let respOrdinador = generaResp(); 
        if (document.querySelector('input[name="resp"]:checked').value=='lPedra') {
            if(respOrdinador== pedra){
                document.getElementById('resul1').innerHTML = `La màquina ha tret pedra - EMPAT`;
            }
            if(respOrdinador == paper){
                document.getElementById('resul1').innerHTML = `La màquina ha tret paper - HAS PERDUT`;
                contLose++;
            }
            if(respOrdinador == tisores){
                document.getElementById('resul1').innerHTML = `La màquina ha tret tisores - HAS GUANYAT`;
                contWin++;
            }
        }
        // OPCIÓ PAPER
        if (document.querySelector('input[name="resp"]:checked').value=='lPaper') {
            if(respOrdinador == paper){
                document.getElementById('resul1').innerHTML = `La màquina ha tret paper - EMPAT`;
            }
            if(respOrdinador == tisores){
                document.getElementById('resul1').innerHTML = `La màquina ha tret tisores - HAS PERDUT`;
                contLose++;
            }
            if(respOrdinador == pedra){
                document.getElementById('resul1').innerHTML = `La màquina ha tret pedra - HAS GUANYAT`;
                contWin++;
            }
        }
        // OPCIÓ TISORES
        if (document.querySelector('input[name="resp"]:checked').value=='lTisores') {
            if(respOrdinador == tisores){
                document.getElementById('resul1').innerHTML = `La màquina ha tret tisores - EMPAT`;
            }
            if(respOrdinador == pedra){
                document.getElementById('resul1').innerHTML = `La màquina ha tret pedra - HAS PERDUT`;
                contLose++;
            }
            if(respOrdinador == paper){
                document.getElementById('resul1').innerHTML = `La màquina ha tret paper - HAS GUANYAT`;
                contWin++;
            }
        }
        document.getElementById('lWin').innerHTML = `PARTIDES GUANYADES [ ${contWin} ]`;
        document.getElementById('lLose').innerHTML = `PARTIDES PERDUDES [ ${contLose} ]`;

    }
    document.getElementById('Neteja').onclick = function(){
        contWin = 0;
        contLose = 0;
        document.getElementById('resul1').innerHTML = ``;
        document.getElementById('lWin').innerHTML = `PARTIDES GUANYADES [ ${contWin} ]`;
        document.getElementById('lLose').innerHTML = `PARTIDES PERDUDES [ ${contLose} ]`;
    }

}
