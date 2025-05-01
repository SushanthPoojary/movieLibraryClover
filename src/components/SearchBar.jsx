import { useState } from "react";

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(query);
    };


    return (
        <form onSubmit={handleSubmit} className="w-full px-4 py-3">
            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
                <input
                    type="text"
                    className="flex-1 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                    placeholder="Search Movies"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
                >
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchBar;