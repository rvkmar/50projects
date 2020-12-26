const jokeEle = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)
generateJoke()

// preferred way
async function generateJoke(){
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }
    const response = await fetch('https://icanhazdadjoke.com', config)
    const data = await response.json()
    jokeEle.innerHTML = data.joke
}

// messy way
// function generateJoke(){
//     const config = {
//         headers: {
//             Accept: 'application/json',
//         },
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) =>res.json())
//     .then((data) => {
//         jokeEle.innerHTML = data.joke
//     })
// }
