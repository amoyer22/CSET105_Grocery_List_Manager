let items = []

function addItem(){
    if(document.getElementById("input").value === ''){
        alert("Invalid input. Your item must have a name.")
    }
    else{
        let input = document.getElementById("input").value
        let item = `<li onclick="strikethrough(this)">${input}</li>`
        let li = document.createElement("li")
        li.innerHTML = item
        document.getElementById("listSet").appendChild(li)
        document.getElementById("input").value=''

        let newItem = {name: input, purchased: false}
        items.push(newItem)
        console.log(items)
    } 
}

function strikethrough(element){
    if(element.style.textDecoration === "line-through"){
        element.style.textDecoration = "none"
    }
    else{
        element.style.textDecoration = "line-through"
    }

    for(let object of items){
        if(element.style.textDecoration === "line-through"){
            object.purchased = true
        }
    }
    console.log(items)
}