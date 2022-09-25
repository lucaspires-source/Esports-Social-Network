import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, GameController } from 'phosphor-react'
import Input from './Form/Input'
import { useEffect, useState, FormEvent } from 'react'
import * as ToogleGroup from '@radix-ui/react-toggle-group'
import axios from 'axios'
interface Game {
  id: string
  title: string
}

export default function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([])
  const [weekdays, setWeekdays] = useState<string[]>([])
  const [useVoiceChannel, setVoiceChannel] = useState<boolean>(false)
  useEffect(() => {
    axios('http://localhost:3333/games').then((res) => {
      setGames(res.data)
    }),
      []
  })

 async function handleCreateAd(e: FormEvent) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if(!data.name) {
      return
    }

try{

  await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
    name: data.name,
    yearsPlaying: Number(data.yearsPlaying),
    discord: data.discord,
    hourStart: data.hourStart,
    hourEnd: data.hourEnd,
    weekDays: weekdays.map(Number),
    useVoiceChannel: useVoiceChannel,
  })


  alert('Game created!')
  window.location.reload();
} catch(err){
console.log(err)

alert('Something Went Wrong!')
}

  }
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-4xl font-black">
          Publique um anúncio
        </Dialog.Title>
        <form className="mt-8 flex flex-col gap-4" onSubmit={handleCreateAd}>
          <div className="flex flex-col gap-2">
            <label htmlFor="game">Qual o Game?</label>
            <select
              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
              id="game"
              name="game"
              defaultValue=""
            >
              <option disabled>Selecione o game que deseja jogar</option>
              {games.map((game) => {
                return (
                  <option key={game.id} value={game.id}>
                    {game.title}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Seu Nome </label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Qual seu nome?"
              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga Há quantos anos? </label>
              <Input
                type="number"
                id="yearsPlaying"
                name="yearsPlaying"
                placeholder="Tudo bem ser ZERO"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual seu discord?</label>
              <Input
                type="text"
                id="discord"
                name="discord"
                placeholder="Qual seu username do discord?"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">Quando costuma jogar?</label>
              <ToogleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-1"
                value={weekdays}
                onValueChange={setWeekdays}
              >
                <ToogleGroup.Item
                  value="0"
                  className={`w-8 h-8 rounded ${
                    weekdays.includes('0') ? 'bg-violet-500' : ' bg-zinc-900'
                  }`}
                  title="domingo"
                >
                  D
                </ToogleGroup.Item>
                <ToogleGroup.Item
                  value="1"
                  className={`w-8 h-8 rounded ${
                    weekdays.includes('1') ? 'bg-violet-500' : ' bg-zinc-900'
                  }`}
                  title="segunda"
                >
                  S
                </ToogleGroup.Item>
                <ToogleGroup.Item
                  value="2"
                  className={`w-8 h-8 rounded ${
                    weekdays.includes('2') ? 'bg-violet-500' : ' bg-zinc-900'
                  }`}
                  title="terça"
                >
                  T
                </ToogleGroup.Item>
                <ToogleGroup.Item
                  value="3"
                  className={`w-8 h-8 rounded ${
                    weekdays.includes('3') ? 'bg-violet-500' : ' bg-zinc-900'
                  }`}
                  title="quarta"
                >
                  Q
                </ToogleGroup.Item>
                <ToogleGroup.Item
                  value="4"
                  className={`w-8 h-8 rounded ${
                    weekdays.includes('4') ? 'bg-violet-500' : ' bg-zinc-900'
                  }`}
                  title="quinta"
                >
                  Q
                </ToogleGroup.Item>
                <ToogleGroup.Item
                  value="5"
                  className={`w-8 h-8 rounded ${
                    weekdays.includes('5') ? 'bg-violet-500' : ' bg-zinc-900'
                  }`}
                  title="sexta"
                >
                  S
                </ToogleGroup.Item>
                <ToogleGroup.Item
                  value="6"
                  className={`w-8 h-8 rounded ${
                    weekdays.includes('6') ? 'bg-violet-500' : ' bg-zinc-900'
                  }`}
                  title="sábado"
                >
                  S
                </ToogleGroup.Item>
              </ToogleGroup.Root>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hoursStart">Qual horario do dia?</label>
              <div className="grid grid-cols-2 gap-1">
                <Input
                  type="time"
                  name="hourStart"
                  id="hourStart"
                  placeholder="De"
                />
                <Input
                  type="time"
                  name="hourEnd"
                  id="hourEnd"
                  placeholder="Até"
                />
              </div>
            </div>
          </div>
          <label className=" mt-2 flex flex-row gap-2 text-sm items-center">
            <Checkbox.Root
              className="w-6 h-6 rounded bg-zinc-900 p-1"
              checked={useVoiceChannel}
              onCheckedChange={(checked) => {
                if (checked === true) {
                  setVoiceChannel(true)
                } else {
                  setVoiceChannel(false)
                }
              }}
            >
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar por chat de voz
          </label>
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
  )
}
