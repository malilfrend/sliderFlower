const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slideCount = mainSlide.querySelectorAll('div').length - 1
let activeSlideindex = 0
const container = document.querySelector('.container')

sidebar.style.top = `-${slideCount * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide (direction) {
    if (direction === 'up') {
        activeSlideindex++
        if (activeSlideindex === slideCount + 1) {
            activeSlideindex = 0
        }}
    else if (direction === 'down') {
        activeSlideindex--
        if (activeSlideindex < 0) {
            activeSlideindex = slideCount - 1 
        }
    }
    
    mainSlide.style.transform = `translateY(-${activeSlideindex * 100}vh)`
    sidebar.style.transform = `translateY(${activeSlideindex * 100}vh)`

}