
var dps = 0
var ticks = 0

var audio1 = new Audio('rizz.mp3');

var clickdamage = 1
var kjeks = 0

var EL_knapp = document.querySelector('#klikk') 

var EL_knappup1 = document.querySelector('#up1') 
var EL_knappup2 = document.querySelector('#up2') 
var EL_knappup3 = document.querySelector('#up3') 
var EL_knappup4 = document.querySelector('#up4') 
var EL_knappup5 = document.querySelector('#up5')

var EL_knappdps1 = document.querySelector('#dps1') 
var EL_knappdps2 = document.querySelector('#dps2') 
var EL_knappdps3 = document.querySelector('#dps3') 
var EL_knappdps4 = document.querySelector('#dps4') 
var EL_knappdps5 = document.querySelector('#dps5')

var restartknapp = document.querySelector('#ascend') 
//var svar = document.querySelector('#svar')   

var up1k = 0
var up2k = 0
var up3k = 0
var up4k = 0
var up5k = 0

var up1v = 0
var up2v = 0
var up3v = 0
var up4v = 0
var up5v = 0

var vdpslv1 = 0
var vdpslv2 = 0
var vdpslv3 = 0
var vdpslv4 = 0
var vdpslv5 = 0

var scorea = 0

function ascend() {
    scorea = 
    
    kjeks = 0

    audio1.play();
    
    clickdamage = 1
    uplv1.innerHTML = "Lvl. 0"
    uplv2.innerHTML = "Lvl. 0"
    uplv3.innerHTML = "Lvl. 0"
    uplv4.innerHTML = "Lvl. 0"
    uplv5.innerHTML = "Lvl. 0"
    tdpc.innerHTML = "Total Dpc: 1"
    befor.innerHTML = "Aubergines: 0"
    
    up1k = 0
    up1v = 0
    up2k = 0
    up2v = 0
    up3k = 0
    up3v = 0
    up4k = 0
    up4v = 0
    up5k = 0
    up5v = 0

}

var up1cost = 100
var up2cost = 500
var up3cost = 5000
var up4cost = 15000
var up5cost = 60000


function upgrade1() {
        if (kjeks>up1cost) {
            up1k = up1k+1
            up1v = up1v+1
            clickdamage = clickdamage+1  
            kjeks = kjeks-up1cost
            var rounded = kjeks.toFixed(1);
            befor.innerHTML = "Aubergines: "+rounded
            up1d.innerHTML = ""
            uplv1.innerHTML = "Lvl. "+up1v
            tdpc.innerHTML = "Total Dpc: "+(up1k+up2k+up3k+up4k+up5k+1)
        } else {
            up1d.innerHTML = "Not enough Aubergines"
        }    
    }

function upgrade2() {
        
        if (kjeks>up2cost) {
            up2k = up2k+5
            up2v = up2v+1
            clickdamage  = clickdamage+ 5
            kjeks = kjeks-up2cost
            var rounded = kjeks.toFixed(1);
            befor.innerHTML = "Aubergines: "+rounded
            up2d.innerHTML = ""
            uplv2.innerHTML = "Lvl. "+up2v
            tdpc.innerHTML = "Total Dpc: "+(up1k+up2k+up3k+up4k+up5k+1)
        }else {
            up2d.innerHTML = "Not enough Aubergines"
        }    
    }

function upgrade3() {
        
        if (kjeks>up3cost) {
            up3k = up3k+20
            up3v = up3v+1
            clickdamage  = clickdamage+ 20
            kjeks = kjeks-up3cost
            var rounded = kjeks.toFixed(1);
            befor.innerHTML = "Aubergines: "+rounded
            up3d.innerHTML = ""
            uplv3.innerHTML = "Lvl. "+up3v
            tdpc.innerHTML = "Total Dpc: "+(up1k+up2k+up3k+up4k+up5k+1)
        } else {
            up3d.innerHTML = "Not enough Aubergines"
        }   
    }

function upgrade4() {
        
        if (kjeks>up4cost) {
            up4k = up4k+100
            up4v = up4v+1
            clickdamage  = clickdamage+ 100
            kjeks = kjeks-up4cost
            var rounded = kjeks.toFixed(1);
            befor.innerHTML = "Aubergines: "+rounded
            up4d.innerHTML = ""
            uplv4.innerHTML = "Lvl. "+up4v
            tdpc.innerHTML = "Total Dpc: "+(up1k+up2k+up3k+up4k+up5k+1)
        } else {
            up4d.innerHTML = "Not enough Aubergines"
        }   
    }

function upgrade5() {
        
        if (kjeks>up5cost) {
            up5k = up5k+500
            up5v = up5v+1
            clickdamage  = clickdamage+ 500
            kjeks = kjeks-up5cost
            var rounded = kjeks.toFixed(1);
            befor.innerHTML = "Aubergines: "+rounded
            up5d.innerHTML = ""
            uplv5.innerHTML = "Lvl. "+up5v
            tdpc.innerHTML = "Total Dpc: "+(up1k+up2k+up3k+up4k+up5k)
        } else {
            up5d.innerHTML = "Not enough Aubergines"
            }    
        }


        function update_HTML(){
            var rounded = kjeks.toFixed(1);
            befor.innerHTML = "Aubergines: "+rounded
            var roundeddps = dps.toFixed(1);
            dps13.innerHTML = "Total Dps: "+ roundeddps
        }

        function dps1() {
            if (kjeks>up1cost) {
                kjeks = kjeks-up1cost
                dps = dps + 0.1
                vdpslv1 = vdpslv1 + 1
                dpslv1.innerHTML = "Lvl. "+vdpslv1
                update_HTML()
            }
        }

        function dps2() {
            if (kjeks>up2cost) {
                kjeks = kjeks-up2cost
                dps = dps + 0.5
                vdpslv2 = vdpslv2 + 1
                dpslv2.innerHTML = "Lvl. "+vdpslv2
                update_HTML()
            }
        }

        function dps3() {
            if (kjeks>up3cost) {
                kjeks = kjeks-up3cost
                dps = dps + 2.0
                vdpslv3 = vdpslv3 + 1
                dpslv3.innerHTML = "Lvl. "+vdpslv3
                update_HTML()
            }
        }

        function dps4() {
            if (kjeks>up4cost) {
                kjeks = kjeks-up4cost
                dps = dps + 10.0
                vdpslv4 = vdpslv4 + 1
                dpslv4.innerHTML = "Lvl. "+vdpslv4
                update_HTML()
            }
        }

        function dps5() {
            if (kjeks>up5cost) {
                kjeks = kjeks-up5cost
                dps = dps + 50.0
                vdpslv5 = vdpslv5 + 1
                dpslv5.innerHTML = "Lvl. "+vdpslv5
                update_HTML()
            }
        }



    function sjekk() {
        kjeks = kjeks + clickdamage 
        var rounded = kjeks.toFixed(1);
        befor.innerHTML = "Aubergines: "+rounded
        up1d.innerHTML = ""
        up2d.innerHTML = ""
        up3d.innerHTML = ""
        up4d.innerHTML = ""
        up5d.innerHTML = ""
    }
    
    function myTimer() {
        ticks++
        kjeks = kjeks + dps
        update_HTML()
    }  

    EL_knapp.addEventListener('click', sjekk)
    EL_knappup1.addEventListener('click', upgrade1)
    EL_knappup2.addEventListener('click', upgrade2)
    EL_knappup3.addEventListener('click', upgrade3)
    EL_knappup4.addEventListener('click', upgrade4)
    EL_knappup5.addEventListener('click', upgrade5)

    EL_knappdps1.addEventListener('click', dps1)
    EL_knappdps2.addEventListener('click', dps2)
    EL_knappdps3.addEventListener('click', dps3)
    EL_knappdps4.addEventListener('click', dps4)
    EL_knappdps5.addEventListener('click', dps5)
    //restartknapp.addEventListener('click', ascend)
    
    intervalID = setInterval(myTimer, 1000) //kjører hvert 1000ms (1sek = 1000ms)
