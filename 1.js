let time = document.querySelector('#header');
let btn = document.querySelector('#btn');
let interval = null;

btn.addEventListener('click', ()=> {
    setInterval(() => { 
        time.innerHTML =+time.innerHTML + 1;
    }, 100);
});

let timer2 = document.querySelector('#header2');
let btn_ok = document.querySelector('#btn_ok');
let btn_cancel = document.querySelector('#btn_cancel');



btn_ok.addEventListener('click', () => {
    interval = setInterval(() => {
        timer2.innerHTML =+ timer2.innerHTML + 1;
    }, 100);
});

btn_cancel.addEventListener('click', ()=> {
        clearInterval(interval);
});

let clock = document.querySelector('#header3');

setInterval(() => {
    clock.innerHTML = new Date().toLocaleTimeString();
}, 100);

let timer3 = document.querySelector('#header4');
let btn_back = document.querySelector("#btn2");
let interval2 = null;
btn_back.addEventListener('click', ()=>{
    interval = setInterval(()=>{
        if(timer3.innerHTML == 0)
        {
            clearInterval(interval2);
            timer3.innerHTML = '999';
            btn_back.disabled = true;
        }
        else
        {
            timer3.innerHTML =+ timer3.innerHTML - 1;
        }
    }, 100);
});











