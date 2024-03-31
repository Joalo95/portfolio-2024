import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector.jsx';

export default function Header() {

  const { t } = useTranslation();

  return (
    <header id="header-nav" className="fixed w-[90%] max-w-[1400px] z-50 top-0 px-3 left-[5%] rounded-b-xl">
      <div className="flex items-center justify-around py-1">
        <img src="/favicon.svg" alt="logo icon" className="w-auto h-auto" />
        <nav className="lg:w-2/4 flex lg:gap-3 sm:justify-center min-[425px]:gap-1">
          <a className="py-1 px-3 rounded-xl hover:backdrop-sepia-0">
            {t('HEADER_1')}
          </a>
          <a className="py-1 px-3 rounded-xl hover:backdrop-sepia-0">
            {t('HEADER_2')}
          </a>
        </nav>
        <LanguageSelector />
      </div>
    </header>
  )
}

