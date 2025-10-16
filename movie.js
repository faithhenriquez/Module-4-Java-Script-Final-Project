// fast
// Search results for "Fast"
// Show first six movies
// Show images
// Skeleton Loading State


const movieListEl = document.querySelector(".movie-list");
const moviesWrapper = document.querySelector(".movies");


async function main () {
    moviesWrapper.classList += ('movies__loading');  
    const movies = await fetch ("http://www.omdbapi.com/?s=fast&apikey=fde10d57")
    const moviesData = await movies.json ();
    movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join ("");
    
  
  if (!movies) {
    movies = await fetch ("http://www.omdbapi.com/?s=fast&apikey=fde10d57");
  }
  
  moviesWrapper.classList.remove('movies__loading');
} 
main ();
        function movieHTML(movie) {
        return `<div class="movie-card">
           <div class="movie-card__container">
           <img src="${movie.Poster}"></img>
              <h3>${movie.Title}</h3>
                <p><b>Year:</b> ${movie.Year} </p>
                
            </div>
          </div>`;
    
}

setTimeout(() => {
  renderMovies();
});





