import { useState } from "react";
import SearchBar from "../components/SearchBar";

function Homepage({ onSearch }) {

    return (
        <div className="homepage">
            <SearchBar onSearch={onSearch} />
        </div>
    );
}

export default Homepage;