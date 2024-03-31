import { useTranslation } from 'react-i18next';

export default function Intro() {

  const { t } = useTranslation();


  return (
    <>
      <section className="max-w-[1400px] text-xl text-left px-6 sm:px-20 w-[100ch] text-pretty mx-auto">
        <span className="">
          <h1 className="text-4xl font-semibold text-center text-wrap mx-auto mb-5 tracking-wide animate-fade-up animate-duration-[1300ms] animate-delay-0 animate-ease-linear animate-normal animate-fill-both">
            {t('INTRO_TITLE')}
          </h1>
          <h2 className="text-2xl font-semibold text-center text-wrap mx-auto mb-10 tracking-wide animate-fade-up animate-duration-[1300ms] animate-delay-0 animate-ease-linear animate-normal animate-fill-both">
            {t('INTRO_TITLE_AFTER_BR')}
          </h2>
        </span>
        <span className="animate-fade animate-duration-[1300ms] animate-delay-0 animate-ease-in-out animate-reverse animate-fill-both">
          <p>{t('INTRO_DESCRIPTION_1')} </p>
          <p>{t('INTRO_DESCRIPTION_2')} </p>
          <p>{t('INTRO_DESCRIPTION_3')} </p>
        </span>
        <div className="w-auto h-auto flex justify-center mt-10">
          <a className="bg-white text-sm rounded font-medium px-12 py-2 transition-colors hover:bg-[#2e2e2e] hover:text-white inline-flex justify-center items-center text-black"
            href="https://drive.google.com/file/d/1hpQ9Uz564-vENSXHlk9_eeq8stny9Sr7/view?usp=sharing">
            {t('VIDEO_TITLE')}
          </a>
        </div>
      </section>
    </>
  )
}


