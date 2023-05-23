var goldonscreen = false
var goldonscreennumber = 0

var boost1timer = 0

var boost1active = false

var randtall = 0
var totalcookies = 0
var dps = 0
var dpsr = Math.round(dps)
var ticks = 0
var autosavetime = 0

var audio1 = new Audio('rizz.mp3');

var clickdamage = 1
var kjeks = 0
var kjeksr = Math.round(kjeks)

var EL_knapphide = document.querySelector('#goldaubergine') 
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
var EL_dps13 = document.querySelector('#dps13')

var EL_knappboost1 = document.querySelector('#boost1') 
var EL_knappboost2 = document.querySelector('#boost2') 
var EL_knappboost3 = document.querySelector('#boost3') 
var EL_knappboost4 = document.querySelector('#boost4') 
var EL_knappboost5 = document.querySelector('#boost5')

var EL_knappsave = document.querySelector('#save')
var EL_knappload = document.querySelector('#load')
var EL_autosave = document.querySelector('#autosave')

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

var realdpc = clickdamage

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
            kjeksr = Math.round(kjeks)
            befor.innerHTML = "Aubergines: "+kjeksr
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
            kjeksr = Math.round(kjeks)
            befor.innerHTML = "Aubergines: "+kjeksr
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
            kjeksr = Math.round(kjeks)
            befor.innerHTML = "Aubergines: "+kjeksr
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
            kjeksr = Math.round(kjeks)
            befor.innerHTML = "Aubergines: "+kjeksr
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
            kjeksr = Math.round(kjeks)
            befor.innerHTML = "Aubergines: "+kjeksr
            up5d.innerHTML = ""
            uplv5.innerHTML = "Lvl. "+up5v
            tdpc.innerHTML = "Total Dpc: "+(up1k+up2k+up3k+up4k+up5k)
        } else {
            up5d.innerHTML = "Not enough Aubergines"
            }    
        }


        

        function dps1() {
            if (kjeks>up1cost) {
                kjeks = kjeks-up1cost
                dps = dps + 0.1
                vdpslv1 = vdpslv1 + 1
                dpslv1.innerHTML = "Lvl. "+vdpslv1
                update_HTML()
            } else {
                document.querySelector('#dpsup1d').innerHTML = "Not enough Aubergines"
                }  
        }

        function dps2() {
            if (kjeks>up2cost) {
                kjeks = kjeks-up2cost
                dps = dps + 0.5
                vdpslv2 = vdpslv2 + 1
                dpslv2.innerHTML = "Lvl. "+vdpslv2
                update_HTML()
            } else {
                document.querySelector('#dpsup2d').innerHTML = "Not enough Aubergines"
                }  
        }

        function dps3() {
            if (kjeks>up3cost) {
                kjeks = kjeks-up3cost
                dps = dps + 2.0
                vdpslv3 = vdpslv3 + 1
                dpslv3.innerHTML = "Lvl. "+vdpslv3
                update_HTML()
            } else {
                document.querySelector('#dpsup3d').innerHTML = "Not enough Aubergines"
                }  
        }

        function dps4() {
            if (kjeks>up4cost) {
                kjeks = kjeks-up4cost
                dps = dps + 10.0
                vdpslv4 = vdpslv4 + 1
                dpslv4.innerHTML = "Lvl. "+vdpslv4
                update_HTML()
            } else {
                document.querySelector('#dpsup4d').innerHTML = "Not enough Aubergines"
                }  
        }

        function dps5() {
            if (kjeks>up5cost) {
                kjeks = kjeks-up5cost
                dps = dps + 50.0
                vdpslv5 = vdpslv5 + 1
                dpslv5.innerHTML = "Lvl. "+vdpslv5
                update_HTML()
            } else {
                document.querySelector('#dpsup5d').innerHTML = "Not enough Aubergines"
                }  
        }
        
        
        function boost1() {
            //console.log("goober")
            tdpc.innerHTML = "Total Dpc: "+((up1k+up2k+up3k+up4k+up5k+1)*10)
            boost1timer = 10
            boost1active = true
        }




    function sjekk() {
        
        if (boost1active == true) {
            console.log("boost1active true fjlahflk")
            realdpc = clickdamage * 10
            kjeks = kjeks + realdpc
            befor.innerHTML = "Aubergines: "+kjeks
            console.log(realdpc+"sdad")
        } else {
            kjeks = kjeks + clickdamage
        }
        
        kjeksr = Math.round(kjeks)
        befor.innerHTML = "Aubergines: "+kjeksr
        up1d.innerHTML = ""
        up2d.innerHTML = ""
        up3d.innerHTML = ""
        up4d.innerHTML = ""
        up5d.innerHTML = ""

        //clear "not enough aubergines" felt
        document.querySelector('#dpsup1d').innerHTML = ""
        document.querySelector('#dpsup2d').innerHTML = ""
        document.querySelector('#dpsup3d').innerHTML = ""
        document.querySelector('#dpsup4d').innerHTML = ""
        document.querySelector('#dpsup5d').innerHTML = ""

        totalcookies = totalcookies + clickdamage
        randtall = Math.floor(Math.random() * 1000);
        console.log(randtall)
        if (randtall == 500) {
            showgoldaubergine()
        }
        
    }
    
    function myTimer() {
        ticks++
        kjeks = kjeks + dps
        totalcookies = totalcookies + dps
        update_HTML()
        autosavetime = autosavetime + 1
        autosave.innerHTML = "Last Save: " + autosavetime + " Seconds (15Sec)"
        if (autosavetime>15) {
            save()
            autosavetime = 0
        }
        if (goldonscreen == true) {
            goldonscreennumber = goldonscreennumber + 1
            if (goldonscreennumber > 3) {
                document.getElementById("goldaubergine").style.display = "none";
                goldonscreennumber = 0
                goldonscreen = false
            }
        };
        if (boost1active == true) {
            new Audio('rizz.mp3').play();
            tdpc.innerHTML = "Total Dpc: "+((up1k+up2k+up3k+up4k+up5k+1)*10)
            //console.log("boost1active true fjlahflk")
            
            realdpc = clickdamage * 10
            console.log(realdpc+"sdad")
            boost1timer = boost1timer - 1
            console.log(boost1timer)
            document.getElementById('boostno1').innerHTML = boost1timer
            if (boost1timer == 1) {
                tdpc.innerHTML = "Total Dpc: "+(up1k+up2k+up3k+up4k+up5k+1)
                boost1active = false
                }
            }  
        }
    
    function save() {
        localStorage.kjeksST = kjeks
        localStorage.dpsST = dps
        localStorage.clickdamageST = clickdamage
        localStorage.ticksST = ticks

        localStorage.up1kST = up1k
        localStorage.up2kST = up2k
        localStorage.up3kST = up3k
        localStorage.up4kST = up4k
        localStorage.up5kST = up5k

        localStorage.up1vST = up1v
        localStorage.up2vST = up2v
        localStorage.up3vST = up3v
        localStorage.up4vST = up4v
        localStorage.up5vST = up5v

        localStorage.vdpslv1ST = vdpslv1
        localStorage.vdpslv2ST = vdpslv2
        localStorage.vdpslv3ST = vdpslv3
        localStorage.vdpslv4ST = vdpslv4
        localStorage.vdpslv5ST = vdpslv5

        localStorage.totalcookiesST = totalcookies
        
        autosavetime = 0
        autosave.innerHTML = "Last Save: " + autosavetime + " Seconds (15Sec)"

        console.log("saved")
    }

    function load() {
        kjeks = JSON.parse(localStorage.kjeksST)
        dps = JSON.parse(localStorage.dpsST)
        clickdamage = JSON.parse(localStorage.clickdamageST)
        ticks = JSON.parse(localStorage.ticksST)

        up1k = JSON.parse(localStorage.up1kST)
        up2k = JSON.parse(localStorage.up2kST)
        up3k = JSON.parse(localStorage.up3kST)
        up4k = JSON.parse(localStorage.up4kST)
        up5k = JSON.parse(localStorage.up5kST)

        up1v = JSON.parse(localStorage.up1vST)
        up2v = JSON.parse(localStorage.up2vST) 
        up3v = JSON.parse(localStorage.up3vST)
        up4v = JSON.parse(localStorage.up4vST)
        up5v = JSON.parse(localStorage.up5vST)

        vdpslv1 = JSON.parse(localStorage.vdpslv1ST)
        vdpslv2 = JSON.parse(localStorage.vdpslv2ST)
        vdpslv3 = JSON.parse(localStorage.vdpslv3ST)
        vdpslv4 = JSON.parse(localStorage.vdpslv4ST)
        vdpslv5 = JSON.parse(localStorage.vdpslv5ST)

        totalcookies = JSON.parse(localStorage.totalcookiesST)
        //console.log(typeof(kjeks))
        befor.innerHTML = "Aubergines: "+ Math.round(kjeks)
        tdpc.innerHTML = "Total Dpc: "+(up1k+up2k+up3k+up4k+up5k+1)
        dpslv1.innerHTML = "Lvl. "+vdpslv1
        dpslv2.innerHTML = "Lvl. "+vdpslv2
        dpslv3.innerHTML = "Lvl. "+vdpslv3
        dpslv4.innerHTML = "Lvl. "+vdpslv4
        dpslv5.innerHTML = "Lvl. "+vdpslv5
        uplv1.innerHTML = "Lvl. "+up1v
        uplv2.innerHTML = "Lvl. "+up2v
        uplv3.innerHTML = "Lvl. "+up3v
        uplv4.innerHTML = "Lvl. "+up4v
        uplv5.innerHTML = "Lvl. "+up5v

        console.log("loaded")
    }

    document.getElementById("goldaubergine").style.display = "none";
    
    function update_HTML(){
        kjeksr = Math.round(kjeks)
        befor.innerHTML = "Aubergines: "+kjeksr
        dpsr = Math.round(dps)
        dps13.innerHTML =  "Total Dps: "+dps.toFixed(1)
    }

    function goldenaubergine1() {
        kjeks = kjeks + totalcookies * 2
        document.getElementById("goldaubergine").style.display = "none";
        kjeksr = Math.round(kjeks)
        befor.innerHTML = "Aubergines: "+kjeksr
      }

    function showgoldaubergine() {
        console.log("slsdglkjs")
        var x = Math.floor(Math.random() * (900 - 175 + 1)) + 100;
        var y = Math.floor(Math.random() * (850 - 50 + 1)) + 50;
        EL_knapphide.style.top = x + 'px';
        EL_knapphide.style.left = y + 'px';
        document.getElementById("goldaubergine").style.display = "block";
        goldonscreen = true
    }
    
    EL_knapphide.addEventListener('click', goldenaubergine1)
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

    EL_knappboost1.addEventListener('click',boost1)
    EL_knappboost2.addEventListener('click',boost2)
    EL_knappboost3.addEventListener('click',boost3)
    EL_knappboost4.addEventListener('click',boost4)
    EL_knappboost5.addEventListener('click',boost5)

    EL_knappsave.addEventListener('click', save)
    EL_knappload.addEventListener('click', load)
    
    intervalID = setInterval(myTimer, 1000) //kjører hvert 1000ms (1sek = 1000ms)
    intervalID1 = setInterval(save, 30000) //kjører hvert 30sek