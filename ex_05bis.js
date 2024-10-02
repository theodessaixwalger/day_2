function getBasketContent(nbr){
    let fruits = ["strawberry", "strawberry", "strawberry",
    "apple-1", "apple-1",
    "lime", "lime",
    "peach",
    "pear", "pear"]
    if(nbr > fruits.length){
    console.log("Too many fruit(s) selected.")
    return
    }
    else
    console.log(nbr + " fruit(s) selected")
    return fruits.splice(0, nbr)
    }
    let fruits = getBasketContent(6)
    showMyBasket(fruits)