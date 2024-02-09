const form = document.querySelector("form");
const btn = document.querySelector(".btn");
const inp = document.querySelector(".inp");
const movieInfo = document.querySelector(".movie-info");
const movietitleRating = document.querySelector(".movie-data");
const genreInfo = document.querySelector(".genre-info");
const allInfo = document.querySelector(".all-about-info");
const posterImg = document.querySelector(".poster-img");
const card = document.querySelector(".card");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const movieData = inp.value.trim();
    if (movieData !== "") {
        getMovieInfo(movieData);
    }

});

const getMovieInfo = async (data) => {
    const myAPI = "a7ec5be";
    const URL = `http://www.omdbapi.com/?apikey=${myAPI}&t=${data}`;
    let res = await fetch(URL);
    let dataInfo = await res.json();
    getMoveData(dataInfo);
}

const getMoveData = (movieData) => {



    const { Title, imdbRating, Genre, Released, Actors, Runtime, Plot, Poster } = movieData;
    movietitleRating.innerHTML = `<h1>${Title}</h1> <p> <strong> Rating: &#11088;</strong>${imdbRating}</p>`;

    Genre.split(",").forEach(element => {
        const p = document.createElement("p");
        p.innerText = element;
        genreInfo.appendChild(p);

    });
    allInfo.innerHTML = `<p><strong>Released Date: </strong> ${Released}</p>
            <p><strong>Duration: </strong>${Runtime}</p>
            <p><strong>Cast: </strong>${Actors}</p>
            <p><strong>Plot: </strong>${Plot}</p>`;

    posterImg.innerHTML = `<img src="${Poster}"/>`

}

