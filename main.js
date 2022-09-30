var mil = 0
var sec = 0
var minuto = 0
var hora = 0
var intervalo

function fourDigits(digit) {
    if (digit < 10) {
        return '0'+digit
    }if (digit >= 10 && digit <= 99) {
        return digit
    }
}

function twodigits (digit) {
    if (digit < 10) {
        return('0' + digit)
    } else {
        return digit
    }
}

var n = false

function iniciar ()  {
    if (!n) {
            n = true
            intervalo = setInterval(watch, 10)
    }
}

function pausar () {
    if(n == true) {
        clearInterval(intervalo)
        n = false
    }
}

function zerar () {
    if(n == true || n == false) {
        clearInterval(intervalo)
        n = false
        document.getElementById('relogio').innerHTML = '00:00:00:00'
        mil = 0
        sec = 0
        minuto = 0
        hora = 0
    }
    
}

function watch () {
    mil++ 
    if (mil > 99) {
        sec++
        mil = 0
    }
    else if (sec > 60) {
        minuto++
        sec = 0
    } else if (minuto == 60) {
        hora++
        minuto = 0
    }
    document.getElementById('relogio').innerHTML = twodigits(hora)+':'+twodigits(minuto)+':'+twodigits(sec)+':'+ fourDigits(mil)
}