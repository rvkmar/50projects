const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const targetValue = +counter.getAttribute('data-target')
        const initialValue = +counter.innerText
        const increment = targetValue / 200
        if(initialValue < targetValue){
            counter.innerText = `${Math.ceil(initialValue + increment)}`
            setTimeout(updateCounter, 1)
        } else{
            counter.innerText = targetValue
        }
    }
    updateCounter()
})