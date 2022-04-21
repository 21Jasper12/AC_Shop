const steps = document.querySelectorAll('.step')
const btnControlComputer = document.querySelector('.computer-btn')
const btnControlMobile = document.querySelector('.mobile-btn')
const nextBtnComputer = document.querySelector('.computer-next')
const prevBtnComputer = document.querySelector('.computer-previous')
const nextBtnMobile = document.querySelector('.mobile-next')
const prevBtnMobile = document.querySelector('.mobile-previous')
const formParts = document.querySelectorAll('.part')


let step = 0

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

function setBtnDisabled() {
  if (step === 0) {
    prevBtnMobile.classList.add('d-none')
    prevBtnComputer.classList.add('d-none')
  } else {
    prevBtnMobile.classList.remove('d-none')
    prevBtnComputer.classList.remove('d-none')
  }

  if (step === 2) {
    nextBtnComputer.innerHTML = '送出申請'
    nextBtnMobile.innerHTML = '送出申請'
  } else {
    nextBtnComputer.innerHTML = '下一步 →'
    nextBtnMobile.innerHTML = '下一步 →'
  }
}

btnControlComputer.addEventListener('click', handleBtnControlClicked)
btnControlMobile.addEventListener('click', handleBtnControlClicked)