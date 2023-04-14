import './index.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {API_KEY} from "./API_KEY.js";
import SelectYear from "./SelectYear.jsx";
import PostMovie from "./PostMovie.jsx";

function App() {

    const [discoverData, setDiscoverData] = useState([]);
    const [singleMovieData, setSingleMovieData] = useState([]);
    const [whatYear, setWhatYear] = useState();

    const year = `&primary_release_year=${whatYear}`;

    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const getData = async () => {
        const pageNum = randomNum(1, 500);
        const index = randomNum(0, 19);
        const page = `&page=${pageNum}`;

        await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US${page}${year}`)
            .then(res => {
                if (res.status === 200) {
                    setDiscoverData(res.data.results[index]);
                }
            })
            .catch(e => console.log("error" + e));
    };

    useEffect(() => {
        if (discoverData.id) {
            axios.get(`https://api.themoviedb.org/3/movie/${discoverData.id}?api_key=${API_KEY}&language=en-US`)
                .then(res => setSingleMovieData(res.data))
                .catch(e => console.log("error" + e));
        }
    }, [discoverData]);

    return (
        <div>
            <div className="main-content">
                <SelectYear {...{setWhatYear}}/>
                <button className="get-data-btn" onClick={getData}>Get random movie</button>
                <PostMovie {...{singleMovieData, discoverData}}/>
            </div>
        </div>
    );
}

export default App;
