const input1 = document.querySelector('#beancanin')
const input2 = document.querySelector('#satchelin')
const input3 = document.querySelector('#exploin')
const input4 = document.querySelector('#rocketin')
const input5 = document.querySelector('#c4in')

const EL_submitknapp = document.querySelector('#submitknapp')

var value1 = 0
var value2 = 0
var value3 = 0
var value4 = 0
var value5 = 0

var beancantotal = 0
var satcheltotal = 0
var explototal = 0
var rockettotal = 0
var c4total = 0

var beancan1total = 0
var satchel1total = 0
var explo1total = 0
var rocket1total = 0
var c41total = 0

var beancan2total = 0
var satchel2total = 0
var explo2total = 0
var rocket2total = 0
var c42total = 0

var totalgp = 0
var totalmetal = 0
var totallowgrade = 0

    function submit4() {
        //hvor mange av hvert item
        value1 = document.getElementById('beancanin').value
        value2 = document.getElementById('satchelin').value
        value3 = document.getElementById('exploin').value
        value4 = document.getElementById('rocketin').value
        value5 = document.getElementById('c4in').value

        //gp
        beancantotal = (value1*60)
        satcheltotal = (value2*240)
        explototal = (value3*12.5)
        rockettotal = (value4*700)
        c4total = (value5*1100)

        //metal
        beancan1total = (value1*20)
        satchel1total = (value2*80)
        explo1total = (value3*5)
        rocket1total = (value4*100)
        c41total = (value5*200)

        //lowgrade
        beancan2total = (value1*0)
        satchel2total = (value2*0)
        explo2total = (value3*0)
        rocket2total = (value4*30)
        c42total = (value5*60)

        //innerhtml av hver item type
        totalgp = (beancantotal + satcheltotal + explototal + rockettotal + c4total)
        totalmetal = (beancan1total + satchel1total + explo1total + rocket1total + c41total)
        totallowgrade = (beancan2total + satchel2total + explo2total + rocket2total + c42total)
        document.getElementById('totalgp').innerHTML = ("You need a total of: " +totalgp+ " Gunpowder")
        document.getElementById('totalmetal').innerHTML = ("You need a total of: " +totalmetal+ " Metal")
        document.getElementById('totallowgrade').innerHTML = ("You need a total of: " +totallowgrade+ " Lowgrade")
    }

    EL_submitknapp.addEventListener('click', submit4)