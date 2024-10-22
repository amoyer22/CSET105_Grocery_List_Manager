let items = []

function addItem(){
    let inputField = document.getElementById("input").value

    if(inputField.value === ''){
        alert("Invalid input. Your item must have a name.")
    }
    else{
        let input = inputField
        let li = document.createElement("li")
        li.innerHTML = input
        li.onclick = function(){strikethrough(li)}
        document.getElementById("listSet").appendChild(li)
        document.getElementById("input").value = ''

        let newItem = {name: input, purchased: false, element: li}
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
            break
        }
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