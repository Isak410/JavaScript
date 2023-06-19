//queryselectors for tekstfelt og submit knapp
const textfelt = document.querySelector('#textfelt')
const knapp = document.querySelector('#knapp')


function utterfunc() {
    let utterance = new
    //process det som står i tekstfeltet, og konverter til Speech
    SpeechSynthesisUtterance(textfelt.value);
    //si det som ble processed over
    speechSynthesis.speak(utterance)
}


knapp.addEventListener('click', utterfunc)