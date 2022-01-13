const axios = require('axios');

function getPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((r) => {
        console.log(r.data);
    })
    .catch(function (error) {
        console.log(error);
    });
}

async function getPost(postId) {
    try {
        const r = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        console.log(r.data)
    } catch (error) {
        console.log(error);
    }
}

async function getPokemon(pokemonId) {
    try {
        const r = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        console.log(r.data)
    } catch (error) {
        console.log(error);
    }
}

// getPosts();
// getPost(2);
getPokemon(1);