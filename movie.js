// fast
// Search results for "Fast"
// Show first six movies
// Show images
// Skeleton Loading State

const movieListEl = document.querySelector(".movie-list");

async function main () {
    const movies = await fetch ("http://www.omdbapi.com/?s=fast&apikey=fde10d57")
    const moviesData = await movies.json ();
    movieListEl.innerHTML = moviesData.map((movie) => userHTML(movie)).join ("");
}
main ();
        function userHTML(movie) {
       `<div class="movie-card">
           <div class="movie-card__container">
              <h3>${movie.title}</h4>
                <p><b>Year:</b> ${movie.year} </p>
                <p><b>Poster:</b> <a href="https://${movie.website}" target="_blank">${movie.website}e</a></p>
            </div>
          </div>`;
    
}
