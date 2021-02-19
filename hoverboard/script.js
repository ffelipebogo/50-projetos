const container = document.getElementById('container')
const colors = [ '#ff0015', '#08ffbd', '#0000ff', '#8df542', '#ff08de', '#f993d1', '#d000ff', '#f5f542' ]
const squares = 1080


for(let i = 0; i < squares; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () =>removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'

}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}