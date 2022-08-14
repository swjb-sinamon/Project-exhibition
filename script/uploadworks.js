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

yearBtn.addEventListener('click', e=> {
    year.style.display = "block";
});

monthBtn.addEventListener('click', ()=> {
    month.style.display = "block";
})