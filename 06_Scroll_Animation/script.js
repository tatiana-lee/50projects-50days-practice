const boxes = document.querySelectorAll('.box')

const checkBoxes = () => {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        return boxTop < triggerBottom ? box.classList.add('show') : box.classList.remove('show')
    })
}

window.addEventListener('scroll', checkBoxes)
