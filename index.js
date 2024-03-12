// Code by incredible_prog

const billForm = document.getElementById("bill-form")
let tipForm = document.getElementById("tip-form")
const peopleForm = document.getElementById("people")
let people = 1

//main calculate function 

const calculate = () =>{
    let tip = (Number(tipForm.value) / 100)
    let bill = Number(billForm.value)
    total = (bill + (tip * bill))/people

    console.log(tip, bill, total)
    document.getElementById("total").textContent = `$${total.toFixed(2)}`
}

const increase = () =>{
    people++
    peopleForm.innerText = people
    calculate()
}

const decrease = () => {
    //decrease if the number 
    people > 1 ? people-- : people = 1
    peopleForm.textContent = people
    calculate()

}
