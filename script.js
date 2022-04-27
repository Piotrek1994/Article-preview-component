const arrBtn = document.querySelector('.arrow-btn')
const arrowWhite = document.querySelector('.arrow-white')
const arrowGray = document.querySelector('.arrow-img')


const changeColor = () => {
    arrowWhite.classList.toggle('')
}


arrBtn.addEventListener('mouseover', changeColor)