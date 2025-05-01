import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { customMap } from "../utils/arrayHelper";

function MovieLists() {

    const { movies } = useSelector(state => state.movies);

    // function customMap(movies, callback) {
    //     const result = [];
    //     for (let i = 0; i < movies.length; i++) {
    //         result[result.length] = callback(movies[i], i);
    //     }
    //     return result;
    // }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {
                customMap(movies, (movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))
            }
        </div>
    );
}

export default MovieLists;