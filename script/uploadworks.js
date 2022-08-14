const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');

for(const input of inputs){
    input.addEventListener('click',e=> {
        let inputId = e.target.id;
        for(const label of labels){
            if(label.htmlFor === inputId){
                const labelText = label.innerHTML;
                label.innerHTML = "";
                input.addEventListener('blur', e=>{
                    if(e.target.value == ""){
                        label.innerHTML = labelText;
                    }
                })
            }
        }
    })
}

const year = document.querySelector('.year');
const month = document.querySelector('.month');
const day = document.querySelector('.date');

const date = new Date();
let yearFirst = date.getFullYear();
let monthFirst = 1;
let monthLast = 12;

for(yearFirst; yearFirst >= 2000; yearFirst-=1){
    const li = document.createElement('li');
    li.textContent = yearFirst;
    year.appendChild(li);
}
for(monthFirst; monthFirst<=monthLast; monthFirst++){
    const li = document.createElement('li');
    li.innerText = monthFirst;
    month.appendChild(li);
}

const yearBtn = document.querySelector('.year-btn');
const monthBtn = document.querySelector('.month-btn');
const dayBtn = document.querySelector('.date-btn');

yearBtn.addEventListener('click', e=> {
    year.style.display = "block";
});

monthBtn.addEventListener('click', ()=> {
    month.style.display = "block";
});

dayBtn.addEventListener('click', ()=>{
    day.style.display ="block";
})

const yearLi = document.querySelectorAll('.year li');
const monthLi = document.querySelectorAll('.month li');
let yearval = date.getFullYear();
let monthval = date.getMonth();

yearLi.forEach(e => {
    e.addEventListener('click', ()=> {
        yearval = Number(e.textContent);
        yearBtn.innerText = yearval;
        year.style.display = "none";
        day.innerHTML = "";
        makeDay();
    });
})

monthLi.forEach(e => {
    e.addEventListener('click',() => {
        monthval = Number(e.textContent);
        monthBtn.innerText = monthval;
        month.style.display = "none";
        day.innerHTML = "";
        makeDay();
    });
});

function makeDay() {
    if((yearval%4 == 0 && yearval%100 != 0) || yearval%400 == 0){
        if(monthval == 1 || monthval==3 || monthval == 5 || monthval ==7 || monthval==8 || monthval==10|| monthval == 12){
            makeDayLi(31);
        }else if(monthval == 2) {
            makeDayLi(29);
        }else {
            makeDayLi(30);
        }
    }else {
        if(monthval == 1 || monthval==3 || monthval == 5 || monthval ==7 || monthval==8 || monthval==10|| monthval == 12){
            makeDayLi(31);
        }else if(monthval == 2) {
            makeDayLi(28);
        }else {
            makeDayLi(30);
        }
    }
}

function makeDayLi(dayLast) {
    let dayFirst = 1;
    for(dayFirst; dayFirst<=dayLast; dayFirst++){
        const li = document.createElement('li');
        li.textContent = dayFirst;
        day.appendChild(li);
    }

    const dayLi = document.querySelectorAll('.date li');

    dayLi.forEach(e => {
        e.addEventListener('click',()=> {
            dayBtn.innerText = e.textContent;
            day.style.display ="none";
        })
    });
}