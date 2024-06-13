const gnrt = document.querySelector('#generate-bill')
const tipbuttons = document.querySelectorAll('#select-tip button')
const customtip = document.querySelector('#custom-tip')
const bill = document.querySelector('#bill')
const numberOfPeople = document.querySelector('#people')

const generateBtn = document.querySelector('#generate-bill')
const resetBtn = document.querySelector('#reset')

const tipAmount = document.querySelector('#tip-amount')
const total = document.querySelector('#total')
const eachPersonBill = document.querySelector('#each-person-bill')

let billInput = {
    bill : 0,
    tip : 0,
    people : 0,
}

let billOuput = {
    tipAmount : 0,
    total : 0,
    epb : 0,
}

const outputHandler = () =>{
    tipAmount.textContent = billOuput.tipAmount
    total.textContent = billOuput.total
    eachPersonBill.textContent = billOuput.epb

    bill.textContent = ''
    numberOfPeople.textContent = ''
}

resetBtn.addEventListener('click', e => {
    tipAmount.textContent = 0
    total.textContent = 0
    eachPersonBill.textContent = 0


})

generateBtn.addEventListener('click', e => {
    let tipAmount = Math.round((billInput.tip/billInput.bill) * 100)
    let total = billInput.bill + tipAmount
    let epb = total/billInput.people

    billOuput = {
        tipAmount ,
        total,
        epb
    }

    outputHandler()
})

bill.addEventListener('input', e => {
    let bill = e.target.value
    billInput.bill = Number(bill)
})

customtip.addEventListener('input', e => {
    let tip = Number(e.target.value)
    setTip(tip)
})

numberOfPeople.addEventListener('input', e => {
    let people = e.target.value
    billInput.people = Number(people)
})


tipbuttons.forEach(btn => {
    btn.addEventListener('click', e => {
        let tip = Number(e.target.outerText.replace('%',''))
        setTip(tip)
    } )
})


const setTip = tip => {
    billInput.tip = tip
}

