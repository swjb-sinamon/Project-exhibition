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
    const btnAddr = document.querySelector('.btn-addr');
    const emailAddr = document.querySelector('.email-addr');
    emailAddr.style.display = "block";
    const emailLi = document.querySelectorAll('.email-addr li');
    emailLi.forEach(e=> {
        e.addEventListener('click',()=> {
            addrBtn.innerHTML = e.textContent;
            emailAddr.style.display = "none";
        })
    })
    emailAddr.addEventListener('mouseover',() => {
        emailAddr.addEventListener('mouseleave',() => {
            emailAddr.style.display = "none";
        })
    })
})


const textarea = document.querySelector('#explain');
let msg = "작품에 대한 설명을 입력하세요"
textarea.addEventListener('click', e=> {
    if(e.target.value == msg){
        e.target.value = "";
    }
    textarea.addEventListener('blur',e => {
        if(e.target.value == ""){
            e.target.value = msg;
        }
    })
});