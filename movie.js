// fast
// Search results for "Fast"
// Show first six movies
// Show images
// Skeleton Loading State

const movieListEl = document.querySelector(".movie-list");

document.body.classList = ' movies__loading';

async function main () {
    const movies = await fetch ("http://www.omdbapi.com/?s=fast&apikey=fde10d57")
    const moviesData = await movies.json ();
    movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join ("");
}
main ();
        function movieHTML(movie) {
        return `<div class="movie-card">
           <div class="movie-card__container">
              <h3>${movie.Title}</h4>
                <p><b>Year:</b> ${movie.Year} </p>
                <p><b>Poster:</b> <a href="https://${movie.Poster}" target="_blank">${movie.Poster}e</a></p>
            </div>
          </div>`;
    
}



