const Movie = require('../models/movie');
const fetch = require('node-fetch');

module.exports = {
    top250
};

// async function top25x0(req, res) {
//     console.log('aayyyyy');
//     const url = `https://imdb-api.com/en/API/Top250Movies/${process.env.API_KEY}`
//     const results = await fetch(url).then((res) => res.json());
//     res.json(results.items);
// }

async function top250(req, res){
    try {        
        const movie = await Movie.find({users: req.user._id})
        res.json({movie: movie})
    } catch(err){
        res.status(400).json({err})
    }
}