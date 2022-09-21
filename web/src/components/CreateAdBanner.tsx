import { MagnifyingGlassPlus } from 'phosphor-react'
export default function CreateAdBanner() {
  return (
    <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
      <div>
        <strong className="text-2xl text-white font-black block">
          Não encontrou seu duo?
        </strong>
        <span className="text-zinc-400">
          Publique um anúncio para encontrar novos players !
        </span>
      </div>
      <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
        <MagnifyingGlassPlus size={24} /> Publicar anúncio{' '}
      </button>
    </div>
  )
}
