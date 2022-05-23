const Movie = require('../models/movie');
const fetch = require('node-fetch');

module.exports = {
    top250
};

async function top250(req, res) {
    const url = `https://imdb-api.com/en/API/Top250Movies/${process.env.API_KEY}`
    const results = await fetch(url).then((res) => res.json());
    res.json(results.items);
}