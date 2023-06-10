//knappen man trykker på for å starte
const EL_begin = document.querySelector('#begin')

//Bilde på venstre og høyre side
const EL_imgL = document.querySelector('#IMGL')
const EL_imgR = document.querySelector('#IMGR')

//p-taggen man får vite hvem som vinner i
const EL_svar = document.querySelector('#svar')

//hva som blir velgt av hver side
var handL = 0
var handR = 0

//med å bestemme hvem som vinner
var handMINUSL = 0
var handMINUSR = 0

//ticks
var ticks = 0

//Function som skal runne når man trykker på knappen
function RPC() {
    //Define hvem som velger hva
    handL = Math.floor(Math.random() * 3) + 1;
    handR = Math.floor(Math.random() * 3) + 1;
    handMINUSL = (handL - handR)
    handMINUSR = (handR - handL)

    //Assign nytt bilde på Venstre side
    if (handL == 1) {
        EL_imgL.src = "./Assets/IMG/Rock.png"
    }   else if (handL == 2) {
        EL_imgL.src = "Assets/IMG/Paper.png"
    }   else if (handL == 3) {
        EL_imgL.src = "Assets/IMG/Scissors.png"
    }   else {
        console.log("L if funker ikke")
    }

    //Assign nytt bilde på høyre side
    if (handR == 1) {
        EL_imgR.src = "./Assets/IMG/Rock.png"
    }   else if (handR == 2) {
        EL_imgR.src = "Assets/IMG/Paper.png"
    }   else if (handR == 3) {
        EL_imgR.src = "Assets/IMG/Scissors.png"
    }   else {
        console.log("R if funker ikke")
    }

    //hva som skjer hvis venstre vinner
    function venstreW () {
        document.getElementById('bildeL').style.backgroundColor = 'green'
        document.getElementById('bildeR').style.backgroundColor = 'red'
        EL_svar.innerHTML = ("Venstre vant")
    }

    //hva som skjer hvis høyre vinner
    function høyreW () {
        document.getElementById('bildeR').style.backgroundColor = 'green'
        document.getElementById('bildeL').style.backgroundColor = 'red'
        EL_svar.innerHTML = ("Høyre vant")
    }

    //hva som skjer hvis det blir gjevnt
    function gjevnt () {
        EL_svar.innerHTML = ("Det ble gjevnt")
        document.getElementById('bildeL').style.backgroundColor = 'gray'
        document.getElementById('bildeR').style.backgroundColor = 'gray'
    }


    //Calculate hvem som vinner
    if (handL > handR) {
        venstreW()
    }
    if (handR > handL) {
        høyreW()     
    }
    if (handMINUSR == 2) {
        venstreW()
    }
    if (handMINUSL == 2) {
        høyreW()
    }
    if (handL-handR == 0) {
        gjevnt()
    }

}

function myTimer() {
    ticks++
    console.log(ticks)
}

//hva som skal skje når man trykker på knappen
EL_begin.addEventListener('click', RPC)
IntervalID = setInterval(myTimer, 1000)