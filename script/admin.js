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
    const project_box = e.target.parentNode.parentNode.parentNode;
    project_box.remove();   
    msgBox.style.display = "none";
  });
  no.addEventListener("click", () => {
    msgBox.style.display = "none";
  })
}

function filter() {
  let search = document.getElementById("search").value.toLowerCase();
  let project_box = document.getElementsByClassName("project_box");

  for (let i = 0; i < project_box.length; i++) {
    title = project_box[i].getElementsByClassName("title");
    if (title[0].innerHTML.toLowerCase().indexOf(search) != -1){
      project_box[i].style.display = "flex";
    } else {
      project_box[i].style.display = "none";
    }
  }
}