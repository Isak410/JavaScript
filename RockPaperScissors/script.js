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


    //Calculate hvem som vinner
    if (handL > handR) {
        EL_svar.innerHTML = ("Venstre vant")
    }
    if (handR > handL) {
        EL_svar.innerHTML = ("Høyre vant")      
    }
    if (handMINUSR == 2) {
        EL_svar.innerHTML = ("Venstre vant")
    }
    if (handMINUSL == 2) {
        EL_svar.innerHTML = ("Høyre vant")
    }
    if (handL-handR == 0) {
        EL_svar.innerHTML = ("Gjevnt")
    }

}

//hva som skal skje når man trykker på knappen
EL_begin.addEventListener('click', RPC)