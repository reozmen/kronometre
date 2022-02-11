const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");
const ssecs = document.getElementById('ssecs'); 
const start = document.getElementById('start');
const stop = document.getElementById('stop');

let timer_sec = Number(secs.innerHTML);
let timer_min = Number(mins.innerHTML);
let timer_hour = Number(hours.innerHTML);
let timer_ssec = Number(ssecs.innerHTML);
let split_sec;

start.addEventListener('click', () => {
    split_sec = setInterval(() => {
        
        if(timer_ssec < 59 ){
            timer_ssec++
             }else{
                timer_ssec = 0
                if(timer_sec <59){
                    timer_sec++;
                    }else{
                        timer_sec = 0;
                        if(timer_min <59){
                            timer_min++;
                            }else{
                                timer_hour++;
                                timer_min = 0;
             }}}
             
        ssecs.innerHTML = timer_ssec;
        secs.innerHTML = timer_sec;
        mins.innerHTML = timer_min;
        hours.innerHTML = timer_hour;
    }, (1000/60));
   
});

stop.addEventListener('click', () => {
    clearInterval(split_sec);
});

document.getElementById('reset').addEventListener('click', () => {
    timer_sec = 0;
    timer_min = 0;
    timer_hour = 0;
    timer_ssec = 0;
    ssecs.innerHTML = timer_ssec;
    secs.innerHTML = timer_sec;
    mins.innerHTML = timer_min;
    hours.innerHTML = timer_hour;
});