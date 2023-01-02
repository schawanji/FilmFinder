const populateDropdrownGenres = (movies) => {

    const select = document.getElementById('film-genres');

    for (let movie of movies) {
        let option = document.createElement('option');
        option.value = movie.id;
        option.innerHTML = movie.name;
        select.append(option)
    }
}

const getSelectedValue = () => {
    const selectedValued = document.getElementById('film-genres').value;
    return selectedValued

}




const displayMovies = (movieTitle, movieOverview, moviePoster, movieId) => {
    const displayyedMovieElement = document.getElementById('movies');
    const movieTitleElement = document.createElement('h2');
    movieTitleElement.innerHTML = movieTitle;
    const movieOverviewElement = document.createElement('p');
    movieOverviewElement.innerHTML = movieOverview;
    const moviePosterElement = document.createElement('img');

    moviePosterElement.setAttribute('src', `https://image.tmdb.org/t/p/original${moviePoster}`)
    moviePosterElement.setAttribute('id', movieId)

    displayyedMovieElement.append(movieTitleElement, movieOverviewElement, moviePosterElement)


}


export { populateDropdrownGenres, getSelectedValue, displayMovies }