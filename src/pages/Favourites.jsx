import MovieCard from "../components/MovieCard";

function Favorites( { favorites } ) {

    function customMap(movies, callback) {
        const result = [];
        for (let i = 0; i < movies.length; i++) {
            result[result.length] = callback(movies[i], i);
        }
        return result;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">My Favorite Movies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    customMap(favorites, (movie) => (
                        <MovieCard key={movie.imdbID} movie={movie} favorites={favorites} />
                    ))
                }
            </div>
        </div>
    );

}

export default Favorites;