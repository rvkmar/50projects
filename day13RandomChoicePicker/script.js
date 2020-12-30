const allTags = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (event) => {
    createTags(event.target.value)
    if(event.key === 'Enter') {
        setTimeout( () => {
            event.target.value = ''
        },10)
        randomSelect()
    }
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    allTags.innerHTML = ''
    tags.forEach(tag => {
        const newTag = document.createElement('span')
        newTag.classList.add('tag')
        newTag.innerText = tag
        allTags.appendChild(newTag)
    })
}

function randomSelect(){
    const times = 30
    const delay = 100
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
        highlightTag(randomTag)
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, delay);
    }, delay);
    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        }, delay);
    }, times*delay);
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}