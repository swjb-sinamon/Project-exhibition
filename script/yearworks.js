document.querySelector('.go-back').addEventListener("click", ()=>{
  history.back();
});

function filter() {
    let search = document.getElementById("search").value.toLowerCase();
    let project_box = document.getElementsByClassName("project_box");

    for (let i = 0; i < project_box.length; i++) {
      title = project_box[i].getElementsByClassName("title");
      subheading = project_box[i].getElementsByClassName("subheading");
      if (title[0].innerHTML.toLowerCase().indexOf(search) != -1 || subheading[0].innerHTML.toLowerCase().indexOf(search) != -1){
        project_box[i].style.display = "flex";
      } else {
        console.dir(title);
        project_box[i].style.display = "none";
      }
    }
}