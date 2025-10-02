let id = Math.floor(Math.random() * 626)


fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let gif =  data.sprites.versions["generation-v"]["black-white"].animated.front_default || data.sprites.front_default
        document.getElementById("pokemon").innerHTML = `<img class="pokemonGif" src="${gif}">`
    })


