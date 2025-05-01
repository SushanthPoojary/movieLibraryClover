function MovieCard({ movie }) {
    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-60 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{movie.Title}</h2>
                <p className="text-sm text-gray-500 mb-3">{movie.Year}</p>
                <button onClick={() => dispatch(addFavorite(movie))} className="text-green-500 font-medium hover:text-green-700 border-green-500 border-2 rounded-full px-4 py-2 hover:border-green-700 cursor-pointer">
                    Add to Favorites
                </button>
            </div>
        </div>
    );
}

export default MovieCard;