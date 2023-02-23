//! Getting id from the form 
const form = document.getElementById("create-task-form")
//! Gettingm the id from the input 
const input = document.getElementById("new-task-description")
//! Getting the id from the ul aka unordered list
const ul = document.getElementById("tasks")
//! Getting the id from the dropdown
const dropdown = document.getElementById("dropdown")

form.addEventListener("submit", (e)=>{
e.preventDefault()
const li = document.createElement("li")
ul.append(li)
li.innerText = input.value
li.addEventListener("click", ()=>{
li.remove()
})
if(dropdown.value === "high"){
li.style.color = "red"
}
if(dropdown.value === "medium"){
li.style.color = "orange"
}
if(dropdown.value === "low"){
li.style.color = "green"
}
})