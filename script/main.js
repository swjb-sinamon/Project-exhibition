const imgs = document.querySelectorAll('.img');
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const yearText = document.querySelectorAll('.year-text');

let index = 0;
const length = imgs.length-1;

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
});

const bottomButton = document.querySelector('.bottom-button');
let count = 0;
let j = 0;

function filter() {
  let search = document.getElementById("search").value.toLowerCase();
  let project_box = document.getElementsByClassName("project_box");

  for (let i = 0; i < project_box.length; i++) {
    title = project_box[i].getElementsByClassName("title");
    subheading = project_box[i].getElementsByClassName("subheading");
    if (title[0].innerHTML.toLowerCase().indexOf(search) != -1 || subheading[0].innerHTML.toLowerCase().indexOf(search) != -1){
      project_box[i].style.display = "flex";
    } else {
      project_box[i].style.display = "none";
    }
  }
}

bottomButton.addEventListener('click', () => {
  const bottomMenu = document.querySelector('.bottom-menu');
  bottomMenu.addEventListener('click', () => {
    const search = document.querySelector('#search');
    search.addEventListener('click', () => {
      bottomMenu.style.display = "block";
    });
    search.addEventListener('blur', () => {
      bottomMenu.style.display = "none";
    })
  });
  if(count == 0){
    bottomMenu.style.display = "block";
    count++;
  }else {
    bottomMenu.style.display = "none";
    count = 0;
  }
})