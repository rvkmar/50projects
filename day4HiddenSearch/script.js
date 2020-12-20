const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.inputt')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})