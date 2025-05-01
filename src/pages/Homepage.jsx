import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieLists from "../components/MovieLists";
import { movieData } from '../lib/dummyData';
import Pagination from "../components/Pagination";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movies/moviesSlice.js";
import Loader from "../components/Loader.jsx";

function Homepage() {

    // const [movieDatas, setMovieDatas] = useState({});

    // const [favorites, setFavorites] = useState([]);

    const { movies, totalResults, status } = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [search, setSearch] = useState("office");

    const [page, setPage] = useState(1);

    // const [loading, setLoading] = useState(true);

    const totalPages = Math.ceil(totalResults / 10);

    useEffect(() => {
        // async function loadMovies() {
        //     const response = await axios(`/api/?i=tt3896198&apikey=a7a95f5d&s=${search}&page=${page}`, {
        //         headers: {
        //             Accept: 'application/json',
        //         },
        //     });
        //     //   console.log(response.data);
        //     setMovieDatas(response.data);
        //     setLoading(false);
        // }
        // loadMovies();

        // console.log("favorites", favorites);

        dispatch(fetchMovies({ search, page }));

        // console.log("dispatch", movies, totalResults, status);

    }, [search, page]);

    return (
        <div className="p-4 overflow-hidden font-general-sans">
            <div className="max-w-7xl mx-auto">
                <SearchBar onSearch={setSearch} />
                {
                    status === 'loading' ?
                        <Loader /> :
                        movies.length > 0 ?
                            <>
                                <MovieLists />
                                {totalPages > 1 && <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />}
                            </> :
                            <div className="flex items-center justify-center min-h-[60vh]">
                                <h1 className="text-lg font-semibold">No Movies Found</h1>
                            </div>
                }
            </div>
        </div>
    );
}

export default Homepage;