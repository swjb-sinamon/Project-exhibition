const del = document.querySelectorAll(".delete");

del.forEach( e => {
  e.addEventListener("click", msg);
});

function msg(e){
  const yes = document.querySelector('.yes');
  const no = document.querySelector('.no');
  const msgBox = document.querySelector('.msg_box');
  msgBox.style.display="block";
  yes.addEventListener("click", () => {
    const project_box = e.target.parentNode.parentNode;
    project_box.remove();   
    msgBox.style.display = "none";
  });
  no.addEventListener("click", () => {
    msgBox.style.display = "none";
  })
}
