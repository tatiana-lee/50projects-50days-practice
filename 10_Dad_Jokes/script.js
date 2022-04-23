const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

//USIN async/await
async function generateJoke() {
    const res = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await res.json()
    jokeEl.innerHTML = data.value
}


// USING .then()
// function generateJoke() {
//     fetch('https://api.chucknorris.io/jokes/random')
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data)
//             jokeEl.innerHTML = data.value
//         })
// }
