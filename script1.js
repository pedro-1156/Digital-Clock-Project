let horas = document.getElementById("horas");
let mins = document.getElementById("minutos");
let segs = document.getElementById("segundos");
let relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    if (hr >= 6 && hr < 18) {
        document.body.style.background = 'linear-gradient(135deg, #8c6be8, #2d7ceb)';
    }
    else {
        document.body.style.background = 'linear-gradient(135deg, #0f0c29, #302b63)';
    }
    if (hr < 10) hr = '0' + hr;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;
    horas.textContent = hr;
    mins.textContent = m;
    segs.textContent = s;
    
},1000);
