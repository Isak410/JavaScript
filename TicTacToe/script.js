const Slot1 = document.querySelector('#slot1')
const Slot2 = document.querySelector('#slot2')
const Slot3 = document.querySelector('#slot3')

const Slot4 = document.querySelector('#slot4')
const Slot5 = document.querySelector('#slot5')
const Slot6 = document.querySelector('#slot6')

const Slot7 = document.querySelector('#slot7')
const Slot8 = document.querySelector('#slot8')
const Slot9 = document.querySelector('#slot9')

const svar = document.querySelector('#svar')

const tur = document.querySelector('#tur')

const restart = document.querySelector('#restart')

var testbool = false
var testbool1 = false
var turn = "x"
var turtekst = "X"

var pressed1 = false
var pressed2 = false
var pressed3 = false
var pressed4 = false
var pressed5 = false
var pressed6 = false
var pressed7 = false
var pressed8 = false
var pressed9 = false

var slot1value = 0
var slot2value = 0
var slot3value = 0

var slot4value = 0
var slot5value = 0
var slot6value = 0

var slot7value = 0
var slot8value = 0
var slot9value = 0

const xvinner = 297
const ovinner = 300


function sjekkvinner() {
    if (slot1value+slot2value+slot3value == xvinner) {
        svar.innerHTML = "X vant"
        Slot1.style.backgroundColor = "green"
        Slot2.style.backgroundColor = "green"
        Slot3.style.backgroundColor = "green"
        testbool1 = true
    } else if (slot4value+slot5value+slot6value == xvinner) {
        svar.innerHTML = "X vant"
        Slot4.style.backgroundColor = "green"
        Slot5.style.backgroundColor = "green"
        Slot6.style.backgroundColor = "green"
        testbool1 = true
    } else if (slot7value+slot8value+slot9value == xvinner) {
        svar.innerHTML = "X vant"
        Slot7.style.backgroundColor = "green"
        Slot8.style.backgroundColor = "green"
        Slot9.style.backgroundColor = "green"
        testbool1 = true
    } else if (slot1value+slot4value+slot7value == xvinner) {
        svar.innerHTML = "X vant"
        Slot1.style.backgroundColor = "green"
        Slot4.style.backgroundColor = "green"
        Slot7.style.backgroundColor = "green"
        testbool1 = true
    } else if (slot2value+slot5value+slot8value == xvinner) {
        svar.innerHTML = "X vant"
        Slot2.style.backgroundColor = "green"
        Slot5.style.backgroundColor = "green"
        Slot8.style.backgroundColor = "green"
        testbool1 = true
    } else if (slot3value+slot6value+slot9value == xvinner) {
        svar.innerHTML = "X vant"
        Slot3.style.backgroundColor = "green"
        Slot6.style.backgroundColor = "green"
        Slot9.style.backgroundColor = "green"
        testbool1 = true
    } else if (slot1value+slot5value+slot9value == xvinner) {
        svar.innerHTML = "X vant"
        Slot1.style.backgroundColor = "green"
        Slot5.style.backgroundColor = "green"
        Slot9.style.backgroundColor = "green"
        testbool1 = true
    } else if (slot3value+slot5value+slot7value == xvinner) {
        svar.innerHTML = "X vant"
        Slot3.style.backgroundColor = "green"
        Slot5.style.backgroundColor = "green"
        Slot7.style.backgroundColor = "green"
        testbool1 = true
    } else if (slot1value+slot2value+slot3value == ovinner) {
        svar.innerHTML = "O vant"
        Slot1.style.backgroundColor = "green"
        Slot2.style.backgroundColor = "green"
        Slot3.style.backgroundColor = "green"
        testbool1 = true
    } else if (slot4value+slot5value+slot6value == ovinner) {
        svar.innerHTML = "O vant"
        Slot4.style.backgroundColor = "green"
        Slot5.style.backgroundColor = "green"
        Slot6.style.backgroundColor = "green"
        testbool1 = true
    } else if (slot7value+slot8value+slot9value == ovinner) {
        svar.innerHTML = "O vant"
        Slot7.style.backgroundColor = "green"
        Slot8.style.backgroundColor = "green"
        Slot9.style.backgroundColor = "green"
        testbool1 = true
    } else if (slot1value+slot4value+slot7value == ovinner) {
        svar.innerHTML = "O vant"
        Slot1.style.backgroundColor = "green"
        Slot4.style.backgroundColor = "green"
        Slot7.style.backgroundColor = "green"
        testbool1 = true
    } else if (slot2value+slot5value+slot8value == ovinner) {
        svar.innerHTML = "O vant"
        Slot2.style.backgroundColor = "green"
        Slot5.style.backgroundColor = "green"
        Slot8.style.backgroundColor = "green"
        testbool1 = true
    } else if (slot3value+slot6value+slot9value == ovinner) {
        svar.innerHTML = "O vant"
        Slot3.style.backgroundColor = "green"
        Slot6.style.backgroundColor = "green"
        Slot9.style.backgroundColor = "green"
        testbool1 = true
    } else if (slot1value+slot5value+slot9value == ovinner) {
        svar.innerHTML = "O vant"
        Slot1.style.backgroundColor = "green"
        Slot5.style.backgroundColor = "green"
        Slot9.style.backgroundColor = "green"
        testbool1 = true
    } else if (slot3value+slot5value+slot7value == ovinner) {
        svar.innerHTML = "O vant"
        Slot3.style.backgroundColor = "green"
        Slot5.style.backgroundColor = "green"
        Slot7.style.backgroundColor = "green"
        testbool1 = true
    }
    if (testbool1 == true) {
        tur.style.opacity = "0%"
        pressed1 = true
        pressed2 = true
        pressed3 = true
        pressed4 = true
        pressed5 = true
        pressed6 = true
        pressed7 = true
        pressed8 = true
        pressed9 = true
    }
}


function sjekktur() {
    if (testbool == false) {
        testbool = true
        turn = "x"
        turtekst = "O"
    }   else {
        testbool = false
        turn = "o"
        turtekst = "X"
    }
}

function turtekst() {
    if (turn == x) {
        turtekst = "O"
    }   else {
        turtekst = "X"
    }
    tur.innerHTML = turtekst
    sjekkvinner()
}


function trykk1() {

    if (pressed1 == false) {
        sjekktur()
        if (turn == "x") {
            slot1value = 99
        }   else {
            slot1value = 100
        }
        Slot1.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed1 = true
        tur.innerHTML = turtekst
        sjekkvinner()
    }
}

function trykk2() {
    if (pressed2 == false) {
        sjekktur()
        if (turn == "x") {
            slot2value = 99
        }   else {
            slot2value = 100
        }
        Slot2.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed2 = true
        tur.innerHTML = turtekst
        sjekkvinner()
    }
}

function trykk3() {
    if (pressed3 == false) {
        sjekktur()
        if (turn == "x") {
            slot3value = 99
        }   else {
            slot3value = 100
        }
        Slot3.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed3 = true
        tur.innerHTML = turtekst
        sjekkvinner()
    }
}

function trykk4() {
    if (pressed4 == false) {
        sjekktur()
        if (turn == "x") {
            slot4value = 99
        }   else {
            slot4value = 100
        }
        Slot4.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed4 = true
        tur.innerHTML = turtekst
        sjekkvinner()
    }
}

function trykk5() {
    if (pressed5 == false) {
        sjekktur()
        if (turn == "x") {
            slot5value = 99
        }   else {
            slot5value = 100
        }
        Slot5.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed5 = true
        tur.innerHTML = turtekst
        sjekkvinner()
    }
}

function trykk6() {
    if (pressed6 == false) {
        sjekktur()
        if (turn == "x") {
            slot6value = 99
        }   else {
            slot6value = 100
        }
        Slot6.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed6 = true
        tur.innerHTML = turtekst
        sjekkvinner()
    }
}

function trykk7() {
    if (pressed7 == false) {
        sjekktur()
        if (turn == "x") {
            slot7value = 99
        }   else {
            slot7value = 100
        }
        Slot7.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed7 = true
        tur.innerHTML = turtekst
        sjekkvinner()
    }
}

function trykk8() {
    if (pressed8 == false) {
        sjekktur()
        if (turn == "x") {
            slot8value = 99
        }   else {
            slot8value = 100
        }
        Slot8.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed8 = true
        tur.innerHTML = turtekst
        sjekkvinner()
    }
}

function trykk9() {
    if (pressed9 == false) {
        sjekktur()
        if (turn == "x") {
            slot9value = 99
        }   else {
            slot9value = 100
        }
        Slot9.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed9 = true
        tur.innerHTML = turtekst
        sjekkvinner()
    }
}

function restartfunc() {
    location.reload();
}

document.firstElementChild.style.zoom = "reset";



Slot1.addEventListener('click', trykk1)
Slot2.addEventListener('click', trykk2)
Slot3.addEventListener('click', trykk3)

Slot4.addEventListener('click', trykk4)
Slot5.addEventListener('click', trykk5)
Slot6.addEventListener('click', trykk6)

Slot7.addEventListener('click', trykk7)
Slot8.addEventListener('click', trykk8)
Slot9.addEventListener('click', trykk9)

restart.addEventListener('click', restartfunc)