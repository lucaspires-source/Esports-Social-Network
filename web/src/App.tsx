import './styles/main.css'
import { useState, useEffect } from 'react'
import logo from './assets/logo.svg'
import GameBanner from './components/GameBanner'
import CreateAdBanner from './components/CreateAdBanner'

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}
function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
      .then((response) => response.json())
      .then((data) => {
        setGames(data)
      }), []
  })
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="logo" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="bg-gradient text-transparent bg-clip-text">duo</span>{' '}
        está aqui
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              adsCount={game._count.ads}
              bannerUrl={game.bannerUrl}
            />
          )
        })}
      </div>
      <div className="pt-1 bg-gradient self-stretch rounded-lg overflow-hidden mt-8">
        <CreateAdBanner />
      </div>
    </div>
  )
}

export default App
