import MovieCard from "./MovieCard";

function MovieLists({ movies, onFavoriteClick, favorites }) {

    function customMap(movies, callback) {
        const result = [];
        for (let i = 0; i < movies.length; i++) {
            result[result.length] = callback(movies[i], i);
        }
        return result;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {
                customMap(movies, (movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} onFavoriteClick={onFavoriteClick} favorites={favorites} />
                ))
            }
        </div>
    );
}

export default MovieLists;