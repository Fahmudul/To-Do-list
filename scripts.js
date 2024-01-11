const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addNote(){
    if(inputBox.value === ''){
        alert("You didn't write anything!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""
    saveNote()
}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveNote()

        
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveNote()

    }
})

function saveNote(){
    localStorage.setItem("Data", listContainer.innerHTML)
}

function displayNotes(){
    listContainer.innerHTML = localStorage.getItem("Data")
}
displayNotes()