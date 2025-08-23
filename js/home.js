let addAmount = document.getElementById("addAmount")
let addPin = document.getElementById("addPin")
let addMoneyBtn = document.getElementById("addMoneyBtn")
let currentAmount = document.getElementById("currentAmount")

addMoneyBtn.addEventListener("click", ()=>{
    if (addPin.value == "1234" ){
let notuntaka = parseFloat(addAmount.value)
let purantaka = parseFloat(currentAmount.innerHTML)
let total = notuntaka+purantaka

currentAmount.innerText = total
    
}
    else{
        alert("Add Actual Pin")
    }

}
)