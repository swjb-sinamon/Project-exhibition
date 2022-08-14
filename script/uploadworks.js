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

const addrBtn = document.querySelector('.addr-btn');

addrBtn.addEventListener('click',() => {
    const emailAddr = document.querySelector('.email-addr');
    emailAddr.style.display = "block";
    const emailLi = document.querySelectorAll('.email-addr li');
    emailLi.forEach(e=> {
        e.addEventListener('click',()=> {
            addrBtn.innerHTML = e.textContent;
            emailAddr.style.display = "none";
        })
    })
})