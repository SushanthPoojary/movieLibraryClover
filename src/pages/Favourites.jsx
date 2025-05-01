import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { customMap } from "../utils/arrayHelper";
import { Link } from "react-router";

function Favorites() {

    // function customMap(movies, callback) {
    //     const result = [];
    //     for (let i = 0; i < movies.length; i++) {
    //         result[result.length] = callback(movies[i], i);
    //     }
    //     return result;
    // }

    const { favorites } = useSelector((state) => state.movies);

    return (
        <div className="max-w-7xl mx-auto p-4 flex flex-col items-center font-general-sans">
            <h1 className="text-2xl font-bold mb-4 text-center sm:text-3xl">My Favorite Movies</h1>

            {
                favorites.length > 0 ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                        {
                            customMap(favorites, (movie) => (
                                <MovieCard key={movie.imdbID} movie={movie} favorites={favorites} />
                            ))
                        }
                    </div>
                    :
                    (
                        <div className="flex flex-col items-center justify-center w-full min-h-[60vh]">
                            <h2 className="text-lg font-semibold">No Favorite Movies Found</h2>
                            <Link to="/" className="ml-4 text-blue-500 hover:text-blue-700 font-medium">Go to Homepage</Link>
                        </div>
                    )

            }

        </div>
    );

}

export default Favorites;