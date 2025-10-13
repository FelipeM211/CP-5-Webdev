export function Header({ query, onChange }) {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-3">
        <h1 className="text-xl font-semibold text-neutral-900">Mini Catálogo</h1>
        <div className="ml-auto w-full max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Busque por título (ex.: Batman)"
            className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </header>
  );
}



