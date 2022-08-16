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
  
  
  
const bottomButton = document.querySelector('.bottom-button');
let count = 0;
let j = 0;

  const search = document.querySelector('.search');
  search.addEventListener('click', () => {
      j++;
      console.log(j);
  });
  
  const bottomBar = document.querySelector('#menu-bar');
  bottomBar.addEventListener('click', () => {
    if(j>0){
      bottomBar.style.display = "block";
      j = 0;
    }else {
      bottomBar.style.display = "none";
    }
  });
  
  bottomButton.addEventListener('click', () => {
    if(count == 0){
      bottomBar.style.display = "block";
      count++;
    }else {
      bottomBar.style.display = "none";
      count = 0;
    }
  })