const imgs = document.querySelectorAll('.img');
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const yearText = document.querySelectorAll('.year-text');

let index = 0;
const length = imgs.length-1;

// function playSlide() {
//   if(index <= length) {
//     imgs[index].style.left = "-80vw";
//     if(index+1 > length) {
//       imgs[0].style.left = "80vw";
//     }else {
//       imgs[index+1].style.left = "0";
//     }
//   }else {
//     index = 0;
//   }
//   index++;
// }

left.addEventListener("click", e=>{
  if(index == 0){
    imgs[index].style.left = "80vw";
    index = length;
    imgs[index].style.left = "0";
  }else {
    imgs[index].style.left="-80vw";
    imgs[index].style.left="80vw";
    index--;
    imgs[index].style.left = "0";
  }
  clearInterval(interval);
  interval = getInterval();
});

right.addEventListener("click",() => {
  if(index > length) {
    imgs[index].style.left = "-80vw";
    index = 0;
    imgs[index].style.left = "0";
  }else {
    imgs[index].style.left="-80vw";
    imgs[index].style.left="80vw";
    index++;
    if(index > length) {
      index = 0;
    }
    imgs[index].style.left = "0";
  }
  clearInterval(interval);
  interval = getInterval();
});


const getInterval = () => {
  return setInterval(()=>{
    imgs[index].style.left="-80vw";
    imgs[index].style.left="80vw";
    index++;
    if(index > length) {
      index = 0;
    }
    imgs[index].style.left = "0";
  },2000);
}

let interval = getInterval();

const data = new Date();
const year = data.getFullYear();
let i = 0;

yearText.forEach(e => {
  e.innerText = year-i;
  i++;
})