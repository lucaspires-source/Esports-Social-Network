interface GameBannerProps {
    bannerUrl: string
    title: string
    adsCount: number;
}

export default function GameBanner({bannerUrl, title, adsCount}: GameBannerProps) {
  return (
    <div>
      <a
        href=""
        target=""
        rel=""
        className="relative rounded-lg overflow-hidden"
      >
        <img
          src={bannerUrl}
          alt="game banner"
        />
        <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
          <strong className=" text-white font-bold block">{title}</strong>
          <span className="text-zinc-300 text-sm block mt-1">{adsCount}{" "}anúncio(s)</span>
        </div>
      </a>
    </div>
  )
}
