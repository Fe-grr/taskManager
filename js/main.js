const button = document.querySelector(".btn btn-primary");
const input = document.querySelector("#form12")
const ul = document.querySelector(".task-list")

function checkTask(task){
  task.classList.add("done")
}

function deleteTask(task){
  task.removeChild(li)
}

function createTask(task){
  const li = document.createElement("li")
  li.setAttribute("class", "task-item")

  const imgClose = document.createElement("img")
  imgClose.setAttribute("src", "/icons/close.png")

  const imgCheck = document.createElement("img")
  imgCheck.setAttribute("src", "/icons/check.png")

  imgCheck.onclick = () => {
    checkTask(li)
  }

  imgClose.onclick = () => {
    deleteTask(li)
  }
  const p = document.createElement("p")
  p.textContent = task

  li.appendChild(imgClose)
  li.appendChild(p)
  li.appendChild(imgCheck)

  ul.appendChild(li)

}

button.onclick = () => {
  const inputValue = input.value;
  alert(inputValue);  

  createTask(inputValue)
  input.value = ""
}
