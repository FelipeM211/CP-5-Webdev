export function MovieCard({ movie, onSelect }) {
  return (
    <button
      onClick={() => onSelect?.(movie)}
      className="text-left rounded-lg bg-white border border-neutral-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-hidden"
    >
      {movie.poster ? (
        <img src={movie.poster} alt={movie.title} className="w-full aspect-[2/3] object-cover" />
      ) : (
        <div className="w-full aspect-[2/3] grid place-items-center bg-neutral-100 text-neutral-400 text-sm">
          Sem imagem
        </div>
      )}
      <div className="p-3">
        <h3 className="font-medium text-neutral-900 line-clamp-2">{movie.title}</h3>
        <p className="text-xs text-neutral-500 mt-1">{movie.year}</p>
      </div>
    </button>
  );
}


