import { MovieCard } from "./MovieCard.jsx";

export function MovieList({ movies, onSelect }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="text-sm text-neutral-500 py-10 text-center">Nenhum filme encontrado.</div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} onSelect={onSelect} />
      ))}
    </div>
  );
}


