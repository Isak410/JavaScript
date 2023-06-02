var guessactive = false
        var intervalID;
        var ganger = 0
        var gjettefelt = document.querySelector('#gjett')
        var knapp = document.querySelector('#klikk') 
        var startknapp = document.querySelector('#timerstart1')
        var stoppknapp = document.querySelector('#timerstopp1')
        var restartknapp = document.querySelector('#restart') 
        var svar = document.querySelector('#svar')   
        var randtall = Math.floor(Math.random() * 101);
        var ticks = 0
        console.log (randtall)


        function sjekk() {


        guessactive = true    
        ganger = ganger + 1 
        if (gjettefelt.value == randtall) {
            guessactive = false
            befor.innerHTML = 'du brukte '+ ganger+ ' forsøk';
            svar.innerHTML = ''
            gjettefelt.value=''
        }   else if (gjettefelt.value<randtall){
            svar.innerHTML = 'høyere'
        }   else if (gjettefelt.value>randtall){
            svar.innerHTML = 'lavere'
        }
        }

        function restart() {
            //if (guessactive = false) {
                svar.innerHTML = '';
                ganger = 0;
                ticks = 0;
                befor.innerHTML = ''; 
                timer.innerHTML = "Tid: "+ticks+" Sekunder";
                gjettefelt.value="";
                svar.innerHTML = "";
                randtall = Math.floor(Math.random() * 101);
                console.log (randtall);
            //}
        }
        
        knapp.addEventListener('click', sjekk)
        restartknapp.addEventListener('click', restart)

        function myTimer() {
            if (guessactive == true) {
                ticks++
                timer.innerHTML = "Tid: "+ticks+" Sekunder"
                }  
            }
        
        intervalID = setInterval(myTimer, 1000) //kjører hvert 1000ms (1sek = 1000ms)