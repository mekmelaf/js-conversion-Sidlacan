let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")

let option1 = document.getElementById("options")
let option2 = document.getElementById("options2")

function val1() {
    if (option1.value == "Kilogram")  {
        if (option2.value == "Grams") {
            input2.value = parseFloat(input1.value) * 1000
        } else if (option2.value == "Pound") {
            input2.value = parseFloat(input1.value) * 2.205
        } else if (option2.value == "Ounce") {
            input2.value = parseFloat(input1.value) * 35.274
        } else {
            input2.value = parseFloat(input1.value) 
        }
    }
    else if (option1.value == "Grams") {
        if (option2.value == "Kilogram") {
            input2.value = parseFloat(input1.value) / 1000
        } else if (option2.value == "Pound") {
            input2.value = parseFloat(input1.value) / 453.6
        } else if (option2.value == "Ounce") {
            input2.value = parseFloat(input1.value) / 28.35
        }else {
            input2.value = parseFloat(input1.value) 
        }
    }
    else if (option1.value == "Pound") {
        if (option2.value == "Kilogram") {
            input2.value = parseFloat(input1.value) / 2.205
        }else if(option2.value == "Grams") {
            input2.value = parseFloat(input1.value) * 453.6
        }else if (option2.value == "Ounce") {
            input2.value = parseFloat(input1.value) * 16
        }else {
            input2.value = parseFloat(input1.value)
        }
    }
    else  {
        if (option2.value == "Kilogram") {
            input2.value = parseFloat(input1.value) / 35.274
        }else if(option2.value == "Grams") {
            input2.value = parseFloat(input1.value) * 28.35
        }else if (option2.value == "Pound") {
            input2.value = parseFloat(input1.value) / 16
        }else {
            input2.value = parseFloat(input1.value)
        }
    }
}


function val2() {
    if (option2.value == "Kilogram")  {
        if (option1.value == "Grams") {
            input1.value = parseFloat(input2.value) * 1000
        } else if (option2.value == "Pound") {
            input1.value = parseFloat(input2.value) *  2.205
        } else if (option2.value == "Ounce") {
            input1.value = parseFloat(input2.value) * 35.274
        } else {
            input1.value = parseFloat(input2.value) 
        }
    }
    else if (option2.value == "Grams") {
        if (option1.value == "Kilogram") {
            input1.value = parseFloat(input2.value) / 1000
        } else if (option1.value == "Pound") {
            input1.value = parseFloat(input2.value) / 453.6
        } else if (option1.value == "Ounce") {
            input1.value = parseFloat(input2.value) / 28.35
        }else {
            input1.value = parseFloat(input2.value) 
        }
    }
    else if (option2.value == "Pound") {
        if (option1.value == "Kilogram") {
            input1.value = parseFloat(input2.value) / 2.205
        }else if(option1.value == "Grams") {
            input1.value = parseFloat(input2.value) * 453.6
        }else if (option1.value == "Ounce") {
            input1.value = parseFloat(input2.value) * 16
        }else {
            input1.value = parseFloat(input2.value)
        }
    }
    else  {
        if (option1.value == "Kilogram") {
            input1.value = parseFloat(input2.value) / 35.274
        }else if(option1.value == "Grams") {
            input1.value = parseFloat(input2.value) * 28.35
        }else if (option1.value == "Pound") {
            input1.value = parseFloat(input2.value) / 16
        }else {
            input1.value = parseFloat(input2.value)
        }
    }
}

