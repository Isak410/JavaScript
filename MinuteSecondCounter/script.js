//Alle queryselectors
const EL_input = document.querySelector('#inn')
const EL_submit = document.querySelector('#submit')
const EL_restart = document.querySelector('#restart')
const EL_svar = document.querySelector('#svar')

//inputs
var inputTall = 0
var inputTall1 = 0

//tider
var minutter = 0
var sekunder = 0
var ganger = 0


function regnUt() {
    inputTall = EL_input.value
    inputTall1 = EL_input.value
    if (inputTall < (999999999999999/60)) {
        if (inputTall > 59) {    
        for (let i = 0; i < 999999999999999; i++) {
            console.log("for loop run")
            inputTall = inputTall - 60
            ganger = ganger + 1
            if (inputTall < 0) {
                i = 999999999999999
            }
        }
        minutter = (ganger-1)
        sekunder = 60 + ((inputTall - inputTall) + inputTall)
        console.log(minutter)
        console.log(sekunder)
        EL_svar.innerHTML = (minutter + " minutter, og " + sekunder + " sekunder")
        EL_input.value = 0
    } else {
        EL_svar.innerHTML = (inputTall + " sekunder")
        EL_input.value = 0
    }
    }   else {
        EL_svar.innerHTML = ("For høyt tall💀")
    }
          
}

function restartfunc() {
    location.reload()
}

EL_submit.addEventListener('click', regnUt)
EL_restart.addEventListener('click', restartfunc)