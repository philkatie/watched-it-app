const Movie = require('../models/movie');

module.exports = {
    create,
    index
}

async function create(req,res) {
    console.log(req.body, req.user);

    try {
        const movie = await Movie.create({
            title: req.body.title,
            user: req.user
        });

        res.status(201).json({ movie: movie });
    } catch (err) {
        res.status(400).json({err});
    }
}

async function index(req, res) {
    try {
        const movies = await Movie.find({}).populate("user").exec();
        res.status(200).json({ movies: movies });
    } catch (err) {
        res.status(400).json({ err });
    }
}