function MovieCard({ movie, onFavoriteClick, favorites }) {

    function customFilter(favorites, callback) {
        const result = [];
        for (let i = 0; i < favorites.length; i++) {
            if (callback(favorites[i], i)) {
                result[result.length] = favorites[i];
            }
        }
        return result;
    }

    function handleAddToFavorites(movie) {
        for (let i = 0; i < favorites.length; i++) {
            if (favorites[i].imdbID === movie.imdbID) {
                return;
            }
        }
        onFavoriteClick((prevFavorites) => [...prevFavorites, movie]);
    }

    function handleRemoveFromFavorites(movie) {
        onFavoriteClick((prevFavorites) => customFilter(prevFavorites, (fav) => fav.imdbID !== movie.imdbID));
    }

    const isFav = customFilter(favorites, (fav) => fav.imdbID === movie.imdbID).length > 0;

    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-60 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{movie.Title}</h2>
                <p className="text-sm text-gray-500 mb-3">{movie.Year}</p>
                {
                    isFav ? (
                        <button onClick={() => handleRemoveFromFavorites(movie)} className="text-red-500 font-medium hover:text-red-700 border-red-500 border-2 rounded-full px-4 py-2 hover:border-red-700 cursor-pointer">
                            Remove from Favorites
                        </button>
                    ) : (
                        <button onClick={() => handleAddToFavorites(movie)} className="text-green-500 font-medium hover:text-green-700 border-green-500 border-2 rounded-full px-4 py-2 hover:border-green-700 cursor-pointer">
                            Add to Favorites
                        </button>
                    )
                }

            </div>
        </div>
    );
}

export default MovieCard;