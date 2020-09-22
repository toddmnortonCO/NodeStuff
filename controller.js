let movies = [
    { id: 1, name: 'Star Wars', goodMovie: true },
    { id: 2, name: 'Wreck It Ralph', goodMovie: true },
    { id: 3, name: 'New Mutants', goodMovie: false }
];

// module.exports - the same as a typical export statement
module.exports = {
    greeting: (req, res) => {
        res.status(200).send('Hello World!');
    },
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    getSingleMovie: (req, res) => {
        console.log(req.params)
        let movie = movies.find(element => element.id === +req.params.id);
        res.status(200).send(movie);
    },
    addMovie: (req, res) => {
        console.log(req.body);

        let newMovie = {
            id: movies[ movies.length - 1].id + 1,
            name: req.body.name,
            goodMovie: req.body.goodMovie
        }

        movies.push(newMovie);
        res.status(200).send(movies);
    },
    updateName: (req, res) => {
        console.log(req.params)
        console.log(req.body)
        
        let movie = movies.find(element => element.id === +req.params.id);
        movie.name = req.body.name;

        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        console.log(req.params)

        // Using findIndex instead of find
        let index = movies.findIndex(element => element.id === +req.params.id);
        movies.splice(index, 1);
    }
}

