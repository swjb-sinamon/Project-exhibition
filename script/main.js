const spna = document.querySelectorAll('.btn');
const imgs = document.querySelectorAll('.img');
const yearText = document.querySelectorAll('.year-text')

//spna.forEach( e=> {
//    e.addEventListener('click', e=> {
//      console.dir(e);
//    })
//});

//imgs.forEach( e => {
//    console.dir(e);
//});

const data = new Date();
const year = data.getFullYear();
let i = 0;

yearText.forEach(e => {
  e.innerText = year-i;
  i++;
})