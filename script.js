
helper()
async function helper() {
    let container = document.getElementById('joke-container')
    let url = "https://v2.jokeapi.dev/joke/Any?type=single"

    const val = await fetch(url)
    let v = await val.json()
    let joke = v.joke
    container.innerText = joke
}

function getRandomJoke() {
    helper()
}
