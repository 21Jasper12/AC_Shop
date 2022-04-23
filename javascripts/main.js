const steps = document.querySelectorAll('.step')
const btnControlComputer = document.querySelector('.computer-btn')
const btnControlMobile = document.querySelector('.mobile-btn')
const nextBtnComputer = document.querySelector('.computer-next')
const prevBtnComputer = document.querySelector('.computer-previous')
const nextBtnMobile = document.querySelector('.mobile-next')
const prevBtnMobile = document.querySelector('.mobile-previous')
const formParts = document.querySelectorAll('.part')
const shopList = document.querySelector('.shopping-list')
const price = document.querySelector('.total-price')

// step階段
let step = 0
// 消費金額
let totalPrice = 0

// product清單
const product = [
  {
    id: "product-1",
    price: 3999
  },

  {
    id: "product-2",
    price: 1299
  }
]

// 判別step階段
function handleBtnControlClicked(e) {
  e.preventDefault()
  const nowStep = steps[step]
  if (e.target.matches('.btn-next') && e.target.innerHTML === '下一步 →') {
    const nextStep = steps[step + 1]
    nowStep.classList.remove('active')
    nowStep.classList.add('checked')
    nextStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step + 1].classList.toggle('d-none')
    step += 1
  } else if (e.target.matches('.btn-previous')) {
    const prevStep = steps[step - 1]
    nowStep.classList.remove('active')
    prevStep.classList.remove('checked')
    prevStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step - 1].classList.toggle('d-none')
    step -= 1
  }
  setBtnDisabled()
}

// 按鈕應應step做變化
function setBtnDisabled() {
  if (step === 0) {
    prevBtnMobile.classList.add('d-none')
    prevBtnComputer.classList.add('d-none')
    nextBtnMobile.classList.remove('w-50')
    nextBtnMobile.classList.add('w-100')
  } else {
    prevBtnMobile.classList.remove('d-none')
    prevBtnComputer.classList.remove('d-none')
    nextBtnMobile.classList.remove('w-100')
    nextBtnMobile.classList.add('w-50')
  }

  if (step === 2) {
    nextBtnComputer.innerHTML = '確認下單'
    nextBtnMobile.innerHTML = '確認下單'
  } else {
    nextBtnComputer.innerHTML = '下一步 →'
    nextBtnMobile.innerHTML = '下一步 →'
  }
}

// 訂單做變化
function shopBtnClicked (event) {
  if (event.target.matches('.list-btn')) {
    const productID = event.target.parentElement.parentElement.id
    let count = event.target.parentElement.children[1]
    let totalCount = Number(count.innerText)

    if (event.target.matches('.increase')){
      const addProduct = product.find(data => data.id === productID)

      const ItemPrice = addProduct.price

      totalCount += 1
      totalPrice += ItemPrice
    }

    else if (event.target.matches('.reduce') && totalCount > 0){
      const addProduct = product.find(data => data.id === productID)

      const ItemPrice = addProduct.price
      totalCount -= 1
      totalPrice -= ItemPrice
    }
      
    count.innerText = totalCount
    price.innerText = totalPrice
  }
}


btnControlComputer.addEventListener('click', handleBtnControlClicked)
btnControlMobile.addEventListener('click', handleBtnControlClicked)
shopList.addEventListener('click', shopBtnClicked)