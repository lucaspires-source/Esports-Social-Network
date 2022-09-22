import './styles/main.css'
import { useState, useEffect } from 'react'
import logo from './assets/logo.svg'
import GameBanner from './components/GameBanner'
import CreateAdBanner from './components/CreateAdBanner'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'
import Input from './components/Form/Input'
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
      }),
      []
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
      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-4xl font-black">
              Publique um anúncio
            </Dialog.Title>
            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game">Qual o Game?</label>
                <Input
                  id="game"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu Nome </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Qual seu nome?"
                  className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="years">Joga Há quantos anos? </label>
                  <Input
                    type="number"
                    id="years"
                    placeholder="Tudo bem ser ZERO"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual seu discord?</label>
                  <Input
                    type="text"
                    id="discord"
                    placeholder="Qual seu username do discord?"
                  />
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekdays">Quando costuma jogar?</label>
                  <div className="grid grid-cols-4 gap-1">
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="domingo"
                    >
                      D
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="segunda"
                    >
                      S
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="terça"
                    >
                      T
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="quarta"
                    >
                      Q
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="quinta"
                    >
                      Q
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="sexta"
                    >
                      S
                    </button>
                    <button
                      className="w-8 h-8 rounded bg-zinc-900"
                      title="sábado"
                    >
                      S
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hours">Qual horario do dia?</label>
                  <div className="grid grid-cols-2 gap-1">
                    <Input type="time" id="hoursStart" placeholder="De" />
                    <Input type="time" id="hoursEnd" placeholder="Até" />
                  </div>
                </div>
              </div>
              <div className=" mt-2 flex flex-row gap-2 text-sm">
                <Input type="checkbox" />
                Costumo me conectar por chat de voz
              </div>
              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold  hover:bg-zinc-600">
                  Cancelar
                </Dialog.Close>
                <button
                  className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                  type="submit"
                >
                  <GameController size={24} />
                  Encontrar um Duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
          sdsds
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default App
