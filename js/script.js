import { apiKey } from "./api-key.js";
import { populateDropdrownGenres, getSelectedValue, displayMovies } from "./display-movies.js"

const baseURl = 'https://api.themoviedb.org/3/'
const getMovieGenres = async () => {
    const requestParameter = `genre/movie/list?api_key=${apiKey}&language=en-US`;
    const url = baseURl + requestParameter;

    try {
        const response = await fetch(url);
        if (response.ok === true) {
            const responseJSON = await response.json();
            // console.log(responseJSON.genres)
            return responseJSON.genres
        }
        throw new Error('Request failed!')
    } catch (error) {
        console.log(error)
    }
}

const showMovies = (movies) => {

    for (const movie of movies) {
        console.log(movie);
        displayMovies(movie.original_title, movie.overview, movie.poster_path)
    }
}

const getMovie = async () => {
    const selectedValue = getSelectedValue();
    console.log(selectedValue)
    const requestParameter = `discover/movie?api_key=${apiKey}&language=en-US&with_genres=${selectedValue}`;
    const url = baseURl + requestParameter
    console.log(url)
    try {
        const response = await fetch(url);
        if (response.ok) {

            const responseJSON = await response.json()
            showMovies(responseJSON.results)
            return responseJSON.results

        }
        throw new Error('Request has failed!')
    } catch (error) {

    }

}



const selectButtonElement = document.getElementById('selectBtn');

getMovie()
//selectButtonElement.onclick = getMovie


getMovieGenres().then(populateDropdrownGenres);

