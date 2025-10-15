// fast
// Search results for "Fast"
// Show first six movies
// Show images
// Skeleton Loading State

const movieListEl = document.querySelector(".movie-list");

async function main () {
    const movies = await fetch ("http://www.omdbapi.com/?s=fast&apikey=fde10d57")
    const moviesData = await movies.json ();
    movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join ("");
}
main ();
        function movieHTML(movies) {
        return `<div class="movie-card">
           <div class="movie-card__container">
              <h3>${movies.title}</h4>
                <p><b>Year:</b> ${movies.year} </p>
                <p><b>Poster:</b> <a href="https://${movies.poster}" target="_blank">${movies.poster}e</a></p>
            </div>
          </div>`;
    
}s