const Slot1 = document.querySelector('#slot1')
const Slot2 = document.querySelector('#slot2')
const Slot3 = document.querySelector('#slot3')

const Slot4 = document.querySelector('#slot4')
const Slot5 = document.querySelector('#slot5')
const Slot6 = document.querySelector('#slot6')

const Slot7 = document.querySelector('#slot7')
const Slot8 = document.querySelector('#slot8')
const Slot9 = document.querySelector('#slot9')

const tur = document.querySelector('#tur')

var testbool = false
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


function sjekktur() {
    if (testbool == false) {
        testbool = true
        turn = "x"
    }   else {
        testbool = false
        turn = "o"
    }
}

function turtekst() {
    if (turn == x) {
        turtekst = "O"
    }   else {
        turtekst = "X"
    }
    tur.innerHTML = turtekst
}


function trykk1() {

    if (pressed1 == false) {
        sjekktur()
        Slot1.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed1 = true
        turtekst()
    }
}

function trykk2() {
    if (pressed2 == false) {
        sjekktur()
        Slot2.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed2 = true
        turtekst()
    }
}

function trykk3() {
    if (pressed3 == false) {
        sjekktur()
        Slot3.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed3 = true
        turtekst()
    }
}

function trykk4() {
    if (pressed4 == false) {
        sjekktur()
        Slot4.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed4 = true
        turtekst()
    }
}

function trykk5() {
    if (pressed5 == false) {
        sjekktur()
        Slot5.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed5 = true
        turtekst()
    }
}

function trykk6() {
    if (pressed6 == false) {
        sjekktur()
        Slot6.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed6 = true
        turtekst()
    }
}

function trykk7() {
    if (pressed7 == false) {
        sjekktur()
        Slot7.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed7 = true
        turtekst()
    }
}

function trykk8() {
    if (pressed8 == false) {
        sjekktur()
        Slot8.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed8 = true
        turtekst()
    }
}

function trykk9() {
    if (pressed9 == false) {
        sjekktur()
        Slot9.style.backgroundImage = 'url("./Assets/IMG/'+ turn + '.png")'
        pressed9 = true
        turtekst()
    }
}



Slot1.addEventListener('click', trykk1)
Slot2.addEventListener('click', trykk2)
Slot3.addEventListener('click', trykk3)

Slot4.addEventListener('click', trykk4)
Slot5.addEventListener('click', trykk5)
Slot6.addEventListener('click', trykk6)

Slot7.addEventListener('click', trykk7)
Slot8.addEventListener('click', trykk8)
Slot9.addEventListener('click', trykk9)