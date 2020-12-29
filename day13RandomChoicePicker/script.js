const tagsEle = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsEle.innerHTML = ''

    tags.forEach(tag => {
        const tagEle = document.createElement('span')
        tagEle.classList.add('tag')
        tagEle.innerText = tag
        tagEle.appendChild(tagEle)
    });
}