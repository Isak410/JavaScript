const EL_begin = document.querySelector('#begin')

const EL_imgL = document.querySelector('#IMGL')
const EL_imgR = document.querySelector('#IMGR')
const EL_svar = document.querySelector('#svar')

var handL = 0
var handR = 0





function RPC() {
    handL = Math.floor(Math.random() * 3) + 1;
    handR = Math.floor(Math.random() * 3) + 1;
    
    if (handL == 1) {
        EL_imgL.src = "./Assets/IMG/Rock.png"
    }   else if (handL == 2) {
        EL_imgL.src = "Assets/IMG/Paper.png"
    }   else if (handL == 3) {
        EL_imgL.src = "Assets/IMG/Scissors.png"
    }   else {
        console.log("L if funker ikke")
    }

    if (handR == 1) {
        EL_imgR.src = "./Assets/IMG/Rock.png"
    }   else if (handR == 2) {
        EL_imgR.src = "Assets/IMG/Paper.png"
    }   else if (handR == 3) {
        EL_imgR.src = "Assets/IMG/Scissors.png"
    }   else {
        console.log("R if funker ikke")
    }

    console.log(handL-handR)
    
    if (handL > handR) {
        if (!handL-handR == -2) {
            EL_svar.innerHTML = ("Venstre vant")
        }
    }
    if (handR > handL) {
        if (!handR-handL == -2) {
            EL_svar.innerHTML = ("Høyre vant")
        }      
    }
    if (handL - )

    if (handL-handR == 0) {
        EL_svar.innerHTML = ("Gjevnt")
}
}




//0 = draw
//1 = 





EL_begin.addEventListener('click', RPC)