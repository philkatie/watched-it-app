const Movie = require('../models/movie');

module.exports = {
    create,
    deleteWatch
}

async function create(req, res){
 
    try {
		// Find a post, so we need the id of the post
        const movie = await Movie.findById(req.params.id);
		
        movie.watches.push({userId: req.user._id}); //mutating a document
        await movie.save()// save it
        res.status(201).json({data: 'like added'})
    } catch(err){
       
        res.status(400).json({err})
    }
    
}

async function deleteWatch(req, res){
    try {
        const movie = await Movie.findOne({'watches._id': req.params.id, 'watches.userId': req.user._id});
        movie.watches.remove(req.params.id) // mutating a document
		console.log(movie, " <-= movie in delete!")
        // req.params.id is the like id 
        await movie.save() // after you mutate a document you must save
        res.json({data: 'like removed'})
    } catch(err){
        res.status(400).json({err})
    }
}