import './App.css'
import Game from './components/Game'

function App() {

  return (
    <section className='bg-slate-600 min-h-screen min-w-screen'>
      <h1 className='text-center text-slate-200'>Tic Tac Toe</h1>
      <Game />
    </section>
  )
}

export default App
