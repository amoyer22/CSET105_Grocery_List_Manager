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
    let itemName = element.innerHTML

    for(let item of items){
        if(item.name === itemName){
            if(item.purchased){
                element.style.textDecoration = "none"
                item.purchased = false
            }
            else{
                element.style.textDecoration = "line-through"
                item.purchased = true
            }
        }
        break
    }
    console.log(items)
}

function purchasedView(){
    document.getElementById("listSet").innerHTML = ''
    for(let item of items){
        if(item.purchased){
            document.getElementById("listSet").appendChild(item.element)
        }
    }
}

function unpurchasedView(){
    document.getElementById("listSet").innerHTML = ''
    for(let item of items){
        if(!item.purchased){
            document.getElementById("listSet").appendChild(item.element)
        }
    }
}

function allView(){
    document.getElementById("listSet").innerHTML = ''
    for(let item of items){
        document.getElementById("listSet").appendChild(item.element)
    }
}