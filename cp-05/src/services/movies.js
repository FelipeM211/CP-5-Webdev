const OMDB_API_URL = "https://www.omdbapi.com/";

function getApiKey() {
  const fromEnv = import.meta?.env?.VITE_OMDB_API_KEY;
  return fromEnv && String(fromEnv).trim().length > 0 ? fromEnv : "thewdb";
}

export async function searchMovies(query) {
  const trimmed = String(query || "").trim();
  if (!trimmed) return { movies: [], total: 0, error: null };

  const url = `${OMDB_API_URL}?apikey=${getApiKey()}&s=${encodeURIComponent(
    trimmed
  )}&type=movie`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();

  if (data.Response === "False") {
    return { movies: [], total: 0, error: data.Error || "Sem resultados" };
  }

  return {
    movies: (data.Search || []).map((m) => ({
      id: m.imdbID,
      title: m.Title,
      year: m.Year,
      poster: m.Poster && m.Poster !== "N/A" ? m.Poster : null,
      type: m.Type,
    })),
    total: Number(data.totalResults || 0),
    error: null,
  };
}

export async function getMovieById(imdbId) {
  if (!imdbId) throw new Error("imdbId é obrigatório");
  const url = `${OMDB_API_URL}?apikey=${getApiKey()}&i=${encodeURIComponent(
    imdbId
  )}&plot=short`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const m = await res.json();
  if (m.Response === "False") throw new Error(m.Error || "Filme não encontrado");

  return {
    id: m.imdbID,
    title: m.Title,
    year: m.Year,
    poster: m.Poster && m.Poster !== "N/A" ? m.Poster : null,
    genre: m.Genre,
    runtime: m.Runtime,
    plot: m.Plot,
    rating: m.imdbRating,
  };
}



