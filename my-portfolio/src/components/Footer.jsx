import { useTranslation } from 'react-i18next';

export default function Footer() {

  const { t } = useTranslation();

  return (
    <>
      <footer className="bg-black/40 relative mt-24 w-[90%] max-w-[1400px] left-[5%] rounded-t-xl">
        <div className="mx-auto w-full max-w-screen-xl p-4 px-6 py-5">
          <div className="mb-3 md:mb-0 flex flex-col justify-center">
            <a href="#" className="flex justify-center items-center -mt-14 mb-3">
              <img src="/favicon.svg" alt="logo icon" className="size-16" />
            </a>
            <div className="flex justify-center gap-x-4">
              <a className="flex items-center text-white hover:text-yellow-300"
                href="https://www.linkedin.com/in/joaquin-alonso-ortiz"
              >
                <img src="/linkedin.svg" alt="linkedin icon" className="size-6" />
                <span className="max-lg:sr-only">Linkedin</span>
              </a>
              <a className="flex items-center text-white hover:text-yellow-300"
                href="https://www.instagram.com/ing.joalonso?igsh=b2Q3bDA2bWk4OHJp"
              >
                <img src="/instagram.svg" alt="instagram icon" className="size-6" />
                <span className="max-lg:sr-only">Instagram</span>
              </a>
              <a className="flex items-center text-white hover:text-yellow-300"
                href="https://github.com/Joalo95"
              >
                <img src="/github.svg" alt="github icon" className="size-6" />
                <span className="max-lg:sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-2 sm:mx-auto border-white/10 lg:my-3" />
        <div className="w-auto flex justify-center">
          <span className="text-sm sm:text-center text-gray-400">
            {t('FOOTER')}
          </span>
        </div>
      </footer>
    </>
  )
}

