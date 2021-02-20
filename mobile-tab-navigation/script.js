const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')

listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()
        console.log('itemmm', item)
        item.classList.add('active')
        console.log(contents[idx])
        contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}

function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}