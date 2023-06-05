//tid
var autosavetime = 0

//kjeks / currency
var kjeks = 0
var totalcookies = 0

//damage
var dps = 0
var clickdamage = 1
var realdpc = clickdamage


//alt av boost variabler
var goldonscreen = false
var goldonscreennumber = 0
var boost1timer = 0
var boost2timer = 0
var boost3timer = 0
var boost4timer = 0
var boost5timer = 0
var boost1active = false
var boost2active = false
var boost3active = false
var boost4active = false
var boost5active = false

//boolean for testing
var test1 = false
var test2 = false
var test3 = false
var test4 = false
var test5 = false

//integers for testing
var testint1 = 0
var testint2 = 0
var testint3 = 0
var testint4 = 0
var testint5 = 1
var testint6 = 16

//auberginebilde
const EL_knapp = document.querySelector('#klikk') 


const EL_totaldpc = document.getElementById("tdpc")

//goldenaubergine
const EL_knapphide = document.querySelector('#goldaubergine') 

//clickdamage upgrades
const EL_knappup1 = document.querySelector('#up1') 
const EL_knappup2 = document.querySelector('#up2') 
const EL_knappup3 = document.querySelector('#up3') 
const EL_knappup4 = document.querySelector('#up4') 
const EL_knappup5 = document.querySelector('#up5')

//dps upgrades
const EL_knappdps1 = document.querySelector('#dps1') 
const EL_knappdps2 = document.querySelector('#dps2') 
const EL_knappdps3 = document.querySelector('#dps3') 
const EL_knappdps4 = document.querySelector('#dps4') 
const EL_knappdps5 = document.querySelector('#dps5')
const EL_dps13 = document.querySelector('#dps13')

//boost knapper
const EL_knappboost1 = document.querySelector('#boost1') 
const EL_knappboost2 = document.querySelector('#boost2') 
const EL_knappboost3 = document.querySelector('#boost3') 
const EL_knappboost4 = document.querySelector('#boost4') 
const EL_knappboost5 = document.querySelector('#boost5')

//misc knapper
const EL_knappsave = document.querySelector('#save')
const EL_knappload = document.querySelector('#load')
const EL_knapprestart = document.querySelector('#restart')
const EL_godmode = document.querySelector('#godmode')
const EL_autosave = document.querySelector('#autosave')

//boostupgrades warnings
const EL_boostup1d = document.querySelector('#boostup1d')
const EL_boostup2d = document.querySelector('#boostup2d')
const EL_boostup3d = document.querySelector('#boostup3d')
const EL_boostup4d = document.querySelector('#boostup4d')
const EL_boostup5d = document.querySelector('#boostup5d')

//restartknapp (ikke i bruk)
const restartknapp = document.querySelector('#ascend') 

//tekst for tittel av boosts (for fargeskifting)
const EL_boost1asd = document.querySelector('#boost1asd')
const EL_boost2asd = document.querySelector('#boost2asd')

//audiotest
const audio1 = new Audio('./Assets/Audio/rizz.mp3');
const audio2 = new Audio('./Assets/Audio/ambatakam.mp3')

const EL_kambilde1 = document.querySelector('#kambilde')

//clickdamage fra alle upgrades
var up1k = 0
var up2k = 0
var up3k = 0
var up4k = 0
var up5k = 0

//level av hver upgrade
var up1v = 0
var up2v = 0
var up3v = 0
var up4v = 0
var up5v = 0

//level av hver dps upgrade
var vdpslv1 = 0
var vdpslv2 = 0
var vdpslv3 = 0
var vdpslv4 = 0
var vdpslv5 = 0



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
            update_HTML()
            up1d.innerHTML = ""
            uplv1.innerHTML = "Lvl. "+up1v
            if (up1v > 9) {
                test1 = true
            }
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
            update_HTML()
            up2d.innerHTML = ""
            uplv2.innerHTML = "Lvl. "+up2v
            if (up2v > 9) {
                test2 = true
            }
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
            update_HTML()
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
            update_HTML()
            up4d.innerHTML = ""
            uplv4.innerHTML = "Lvl. "+up4v
            tdpc.innerHTML = "Total Dpc: "+(up1k+up2k+up3k+up4k+up5k+1)
        } else {
            up4d.innerHTML = "Not enough Aubergines"
        }   
    }

function upgrade5() {
        if (kjeks>up5cost) {
            audio1.play()
            up5k = up5k+500
            up5v = up5v+1
            clickdamage  = clickdamage+ 500
            kjeks = kjeks-up5cost
            update_HTML()
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
                EL_kambilde1.style.display = "block"
                audio2.play()
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
        if (!boost1active == true)    
            if (!testint4 > 0) {
                if (test1 == true) {
                tdpc.innerHTML = "Total Dpc: "+((up1k+up2k+up3k+up4k+up5k+1)*10)
                boost1timer = 10
                boost1active = true
                EL_boost1asd.style.color = 'yellow';
                EL_totaldpc.style.color = 'red';
                } else {
                    EL_boostup1d.innerHTML = ("Du må ha Håkon i level 10")
                }
            } else {

            }
        }

        function boost2() {
            if (test2 == true) {
                if (!boost2active == true) {
                    EL_boost2asd.style.color = 'yellow';
                    boost2timer = 10
                    boost2active = true
                } 
            }else {
                console.log("slfhsdlkjfhdslkjfhdslkfvgslkj")
                EL_boostup2d.innerHTML = ("Du må ha Eskil i level 10")
            }
        }


    function sjekk() {
        testint2 = testint2 + 1
        if (boost1active == true) {
            realdpc = clickdamage * 10
            kjeks = kjeks + realdpc
            update_HTML()
        } else {
            kjeks = kjeks + clickdamage
        }
        
        EL_kambilde1.style.display = "none"
        update_HTML()
        up1d.innerHTML = ""
        up2d.innerHTML = ""
        up3d.innerHTML = ""
        up4d.innerHTML = ""
        up5d.innerHTML = ""
        EL_boostup1d.innerHTML = ""
        EL_boostup2d.innerHTML = ""

        //clear "not enough aubergines" felt
        document.querySelector('#dpsup1d').innerHTML = ""
        document.querySelector('#dpsup2d').innerHTML = ""
        document.querySelector('#dpsup3d').innerHTML = ""
        document.querySelector('#dpsup4d').innerHTML = ""
        document.querySelector('#dpsup5d').innerHTML = ""

        totalcookies = totalcookies + clickdamage
        let randtall = Math.floor(Math.random() * 1000);
        if (randtall == 500) {
            showgoldaubergine()
        }
    }
    
    function myTimer() {
        if (boost1active == true) {
            testint6 = 26
        }   else {
            testint6 = 16
        }

        if (testint2 > testint6) {
            window.location.href = "autoclicker.html"
        }   else {
            testint2 = 0
        }

        if (dps > 10) {
            testint5 = 0
        }
        
        totalcookies = totalcookies + dps
        update_HTML()
        autosavetime = autosavetime + 1
        autosave.innerHTML = "Last Save: " + autosavetime + " Seconds (15Sec)"
        if (!testint4 == 0) {
            testint4 = testint4 - 1
        }
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
            tdpc.innerHTML = "Total Dpc: "+((up1k+up2k+up3k+up4k+up5k+1)*10)
            realdpc = clickdamage * 10
            boost1timer = boost1timer - 1
            document.getElementById('boostno1').innerHTML = boost1timer
            if (boost1timer == 0) {
                EL_totaldpc.style.color = 'white';
                tdpc.innerHTML = "Total Dpc: "+(up1k+up2k+up3k+up4k+up5k+1)
                boost1active = false
                document.getElementById('boostno1').innerHTML = ""
                testint4 = 60
                }
            }  else {
                EL_totaldpc.style.color = 'white';
            }
        if (boost2active === true) {
            for (let i = 0; i < 10; i++) {
                sjekk()
              }
            boost2timer = boost2timer - 1
            if (boost2timer == 0) {
                boost2active = false
                testint3 = 60
                EL_boost2asd.style.color = 'white';
            }
        }
        }

    function update2() {
        kjeks = kjeks + (dps/10)
    }
    
    function save() {
        localStorage.kjeksST = kjeks
        localStorage.dpsST = dps
        localStorage.clickdamageST = clickdamage

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

        localStorage.testint3ST = testint3
        localStorage.testint4ST = testint4

        console.log("saved")
    }

    function load() {
        kjeks = JSON.parse(localStorage.kjeksST)
        dps = JSON.parse(localStorage.dpsST)
        clickdamage = JSON.parse(localStorage.clickdamageST)

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

        testint4 = JSON.parse(localStorage.testint4ST)
        testint3 = JSON.parse(localStorage.testint3ST)

        totalcookies = JSON.parse(localStorage.totalcookiesST)
        update_HTML()
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

    function restart() {
        confirm("Are you sure you want to restart?");
            localStorage.clear()
            location.reload()
    }

    

    
    
    function update_HTML(){
        befor.innerHTML = "Aubergines: "+kjeks.toFixed(testint5)
        dps13.innerHTML =  "Total Dps: "+dps.toFixed(1)
    }

    function goldenaubergine1() {
        kjeks = kjeks + totalcookies * 2
        document.getElementById("goldaubergine").style.display = "none";
        update_HTML()
      }

    function showgoldaubergine() {
        var x = Math.floor(Math.random() * (900 - 175 + 1)) + 100;
        var y = Math.floor(Math.random() * (850 - 50 + 1)) + 50;
        EL_knapphide.style.top = x + 'px';
        EL_knapphide.style.left = y + 'px';
        document.getElementById("goldaubergine").style.display = "block";
        goldonscreen = true
    }

    function godmode() {
        //function for å teste upgrades / boosts osv.
        kjeks = kjeks + 1000000000000
        update_HTML()
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
    EL_knapprestart.addEventListener('click', restart)

    EL_godmode.addEventListener('click', godmode)
    
    intervalID = setInterval(myTimer, 1000) //kjører hvert 1 sek (1sek = 1000ms)
    intervalID1 = setInterval(update_HTML, 100) //kjører hvert 0,1sek
    intervalID2 = setInterval(update2, 100) //kjører hvert 0,1sek

    load()