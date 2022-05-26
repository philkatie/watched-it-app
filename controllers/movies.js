const Movie = require('../models/movie');

module.exports = {
    create,
    index
    // addMovie,
    // removeMovie,
    // getMovies
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

// async function addMovie(req, res){

//     try {
//         const movie = await Movie.find({imdbId:req.params.id})
//         if (Boolean(movie.length)) {
//             movie[0].users.push(req.user._id)
//             await movie[0].markModified('users')
//             await movie[0].save()
//             res.status(201).json({data: 'movie added'})
//         } else {
//             const movie = await Movie.create({
//                 imdbId: req.params.id
//             })
//             movie.users.push(req.user._id)
//             await movie.save()

//             res.status(201).json({ movie: movie });
//         }
//     } catch(err) {
//         res.status(400).json({message: err.message})
//     }
// }

// async function removeMovie(req, res){
//     try {
//         const movie = await Movie.findOne({'imdbId': req.params.id});
//         // const index = movie.users.indexOf(req.user._id)
//         // movie.users.splice(index, 1)
//         // await movie.save()

//         movie.users.remove(req.user._id)
//         await movie.save() 
//         res.json({data: 'movie removed'})
//     } catch(err){
//         res.status(400).json({err})
//     }
// }

// async function getMovies(req, res){
//     try {        
//         const movie = await Movie.find({users: req.user._id})
//         res.json({movie: movie})
//     } catch(err){
//         res.status(400).json({err})
//     }
// } 