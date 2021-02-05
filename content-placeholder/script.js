const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const nome = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(() => {
    getData()
}, 2500);

function getData(){
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80" alt="">'
    title.innerHTML = 'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quisquam.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/58.jpg" alt="">'
    nome.innerHTML = 'João da Silva'
    date.innerHTML = 'Fev 04, 2021'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))


}
