let a = 2
let b = 4
let action = "sub"

function calculator(){
if(action === "add")
return addition(a, b)
else if(action === "sub")
return subtraction(a, b)
}

function addition(){
return (b = a + b)
}

function subtraction(){
return (b = a - b)
}