import React from 'react';

const PostMovie = ({singleMovieData, discoverData}) => {

    const genres = () => {
        if (singleMovieData.genres) {
            return (
                singleMovieData.genres.map((genre, index) =>
                    <span key={index} className="genre-tag">{genre.name} </span>)
            );
        }
    };

    const formatRuntime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        const hoursString = hours > 0 ? hours + "h " : "";
        const minutesString = remainingMinutes > 0 ? remainingMinutes + "m" : "";

        return hoursString + minutesString;
    };

    const postMovie = () => {
        if (discoverData.length !== 0) {
            return (
                <>
                        <span className="movie-title"><a
                            href={singleMovieData.imdb_id && `https://www.imdb.com/title/${singleMovieData.imdb_id}`}
                            target="_blank">{`${discoverData.title} (${discoverData.release_date.slice(0, 4)})`}</a>
                        </span>

                    {singleMovieData.original_title !== singleMovieData.title &&
                        <span
                            className="movie-original-title">Original title: {singleMovieData.original_title}</span>}

                    <div className="genres">{genres()}</div>

                    <div className="runtime">{formatRuntime(singleMovieData.runtime)}</div>

                    <div
                        className="rating">Rating: {Math.trunc(singleMovieData.vote_average)} ({singleMovieData.vote_count} votes)
                    </div>

                    <img className="movie-poster"
                         src={discoverData.poster_path ? `https://www.themoviedb.org/t/p/original${discoverData.poster_path}` : "https://i.imgur.com/qzyx7qm.png"}
                         alt={discoverData.title}/>
                    {discoverData.overview && <div className="movie-description">{discoverData.overview}</div>}
                </>
            );
        }
    };

    return (
        <>
            {postMovie()}
        </>
    );
};

export default PostMovie;