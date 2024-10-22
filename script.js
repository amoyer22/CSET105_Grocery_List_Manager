function strikethrough(element){
    if(element.style.textDecoration === "line-through"){
        element.style.textDecoration = "none"
    }
    else{
        element.style.textDecoration = "line-through"
    }
}

function addItem(){
    if(document.getElementById("input").value === ''){
        alert("Invalid input. Your item must have a name.")
    }
    else{
        let x = document.getElementById("input").value
        let item = `<li onclick="strikethrough(this)">${x}</li>`
        let li = document.createElement("li")
        li.innerHTML = item
        document.getElementById("listSet").appendChild(li)

        document.getElementById("input").value=''
    } 
}