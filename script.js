function addItem(){
    let x = document.getElementById("input").value
    let y = document.createElement("li")
    y.textContent = x
    document.getElementById("listSet").appendChild(y)
    
    document.getElementById("input").value=''
}