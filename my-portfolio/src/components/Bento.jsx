import { useTranslation } from 'react-i18next';

export default function Bento() {

  const { t } = useTranslation();

  return (
    <>
      <main className="w-full max-w-[1400px] grid lg:grid-cols-10 auto-rows-[30rem] gap-4 mx-auto p-6 md:p-12 lg:p-20">
        <article className="col-span-10 lg:col-span-4 md:col-span-6 relative rounded-xl backdrop-blur border border-black/10 shadow-inner shadow-white/10 overflow-hidden group">

          <div className="absolute left-0 top-0 bottom-0 w-full h-full group-hover:scale-110 transition-scale duration-1000 ease-in-out opacity-90 bg-blend-luminosity bg-blue-950 -z-10">
            <div className="absolute z-10 bottom-0 top-0 w-full h-full bg-gradient-to-b from-transparent from-40% via-[#151836]/50 to-[#151836]/80 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url('/mountain.webp')` }}>
            </div>
          </div>
          <div className="relative select-none flex flex-col gap-1 p-2 md:p-6 text-lg z-20 justify-end h-full">
            <h2 className="text-3xl font-semibold text-balance text-white mb-4 uppercase">
              {t('BENTO_TITLE_1')}
            </h2>
            <p className="text-base md:text-lg max-w-xl">
              {t('BENTO_CONTENT_1')}
            </p>
          </div>

        </article>
        <article className="col-span-10 md:col-span-6 relative rounded-xl backdrop-blur border border-black/10 shadow-inner shadow-white/10 overflow-hidden group">

          <div className="absolute left-0 top-0 bottom-0 w-full h-full group-hover:scale-110 transition-scale duration-1000 ease-in-out opacity-90 bg-blend-luminosity bg-blue-950 -z-10">
            <div className="absolute z-10 bottom-0 top-0 w-full h-full bg-gradient-to-b from-transparent from-40% via-[#151836]/50 to-[#151836]/80 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url('/pistas.webp')` }}>
            </div>
          </div>
          <div className="relative select-none flex flex-col gap-1 p-2 md:p-6 text-lg z-20 justify-end h-full">
            <h2 className="text-3xl font-semibold text-balance text-white mb-4 uppercase">
              {t('BENTO_TITLE_2')}
            </h2>
            <p className="text-base md:text-lg max-w-xl">
              {t('BENTO_CONTENT_2')}
            </p>
          </div>

        </article>
        <article className="col-span-10 md:col-span-6 relative rounded-xl backdrop-blur border border-black/10 shadow-inner shadow-white/10 overflow-hidden group">

          <div className="absolute left-0 top-0 bottom-0 w-full h-full group-hover:scale-110 transition-scale duration-1000 ease-in-out opacity-90 bg-blend-luminosity bg-blue-950 -z-10">
            <div className="absolute z-10 bottom-0 top-0 w-full h-full bg-gradient-to-b from-transparent from-40% via-[#151836]/50 to-[#151836]/80 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url('/pistas.webp')` }}>
            </div>
          </div>
          <div className="relative select-none flex flex-col gap-1 p-2 md:p-6 text-lg z-20 justify-end h-full">
            <h2 className="text-3xl font-semibold text-balance text-white mb-4 uppercase">
              {t('BENTO_TITLE_3')}
            </h2>
            <p className="text-base md:text-lg max-w-xl">
              {t('BENTO_CONTENT_3')}
            </p>
          </div>

        </article>
        <article className="col-span-10 lg:col-span-4 md:col-span-6 relative rounded-xl backdrop-blur border border-black/10 shadow-inner shadow-white/10 overflow-hidden group">

          <div className="absolute left-0 top-0 bottom-0 w-full h-full group-hover:scale-110 transition-scale duration-1000 ease-in-out opacity-90 bg-blend-luminosity bg-blue-950 -z-10">
            <div className="absolute z-10 bottom-0 top-0 w-full h-full bg-gradient-to-b from-transparent from-40% via-[#151836]/50 to-[#151836]/80 bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url('/mountain.webp')` }}>
            </div>
          </div>
          <div className="relative select-none flex flex-col gap-1 p-2 md:p-6 text-lg z-20 justify-end h-full">
            <h2 className="text-3xl font-semibold text-balance text-white mb-4 uppercase">
              {t('BENTO_TITLE_4')}
            </h2>
            <p className="text-base md:text-lg max-w-xl">
              {t('BENTO_CONTENT_4')}
            </p>
          </div>

        </article>
      </main>

    </>
  )
}
