import { useState } from "react";
import { Link } from "react-router";

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!query) return;
        onSearch(query);
        setQuery("");
    };


    return (
        <form onSubmit={handleSubmit} className="w-full px-4 py-3">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 justify-center mx-auto">
                    <input
                        type="text"
                        className="min-w-[250px] flex-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all placeholder:text-sm"
                        placeholder="Search Movies"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer text-sm font-medium"
                    >
                        Search
                    </button>
                </div>

                <div className="sm:ml-auto">
                    <Link to="/favorites">
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer text-sm font-medium"
                        >
                            Favorites
                        </button>
                    </Link>
                </div>
            </div>
        </form>
    );
}

export default SearchBar;