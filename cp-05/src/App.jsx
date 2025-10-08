import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header.jsx'
import { MovieList } from './components/MovieList.jsx'
import { searchMovies } from './services/movies.js'

function App() {
  const [query, setQuery] = useState('Batman')
  const [movies, setMovies] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    async function run() {
      setLoading(true)
      setError('')
      try {
        const { movies, total, error } = await searchMovies(query)
        if (!active) return
        if (error) setError(error)
        setMovies(movies)
        setTotal(total)
      } catch (e) {
        if (!active) return
        setError('Erro ao buscar filmes')
      } finally {
        if (active) setLoading(false)
      }
    }
    run()
    return () => { active = false }
  }, [query])

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header query={query} onChange={setQuery} />
      <main className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Resultados</h2>
          <span className="text-sm text-neutral-500">{total} itens</span>
        </div>
        {loading ? (
          <div className="py-10 text-center text-neutral-500">Carregando...</div>
        ) : error ? (
          <div className="py-10 text-center text-red-600">{error}</div>
        ) : (
          <MovieList movies={movies} />
        )}
      </main>
    </div>
  )
}

export default App
