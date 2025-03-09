const addTask = document.querySelector("#addTask")
const newTask = document.querySelector("#newTask")
const taskList = document.querySelector("#taskList")
const form = document.querySelector("form")
console.log(newTask)

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = `<li class="task"><p class="text">${newTask.value}</p></li>`;
  console.log(taskList);
  taskList.insertAdjacentHTML("beforeend", li);
  newTask.value = "";
});

document.querySelector("#newTask").value = "";

task.addEventListener("click", (e) => {
    if(e.target.nodeName === "BUTTON"){
        e.target.parentElement.remove();
    }
});

let scor = 0;

task.addEventListener("change", (e) => {
    if(scor == 0){
        if(e.target.nodeName === "INPUT"){
            e.target.parentElement.style.backgroundColor = "green";
        }
    }
    
});


