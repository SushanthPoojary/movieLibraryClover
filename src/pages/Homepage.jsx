import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieLists from "../components/MovieLists";
import { movieData } from '../lib/dummyData';
import Pagination from "../components/Pagination";
import axios from "axios";

function Homepage( { onFavoriteClick,  favorites} ) {

    const [movieDatas, setMovieDatas] = useState({});

    // const [favorites, setFavorites] = useState([]);

    const [search, setSearch] = useState("Avengers");

    const [page, setPage] = useState(1);

    const [loading, setLoading] = useState(true);

    const totalPages = Math.ceil(movieDatas?.totalResults / 10);

    useEffect(() => {
        async function loadMovies() {
            const response = await axios(`/api/?i=tt3896198&apikey=a7a95f5d&s=${search}&page=${page}`, {
                headers: {
                    Accept: 'application/json',
                },
            });
            //   console.log(response.data);
            setMovieDatas(response.data);
            setLoading(false);
        }
        loadMovies();

        // console.log("favorites", favorites);
    }, [search, page, favorites]);

    return (
        <div className="p-4 overflow-hidden">
            <SearchBar onSearch={setSearch} />
            {
                loading ?
                    "loading..." :
                    <>
                        <MovieLists movies={movieDatas.Search} onFavoriteClick={onFavoriteClick} favorites={favorites} />
                        {totalPages > 1 && <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />}
                    </>
            }
            {/* {
                totalPages > 1 && <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            } */}
        </div>
    );
}

export default Homepage;