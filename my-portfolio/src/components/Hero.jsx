import { useTranslation } from 'react-i18next';
import ComputersCanvas from "./Computers";

export default function Hero() {

  const { t } = useTranslation();

  return (
    <>
      <div className="relative w-[100ch] max-w-[1400px] h-screen mx-auto">

        <div className="absolute bottom-[40%] lg:left-3 md:left-2 min-[425px]:left-2">
          <h1 className="text-6xl font-semibold text-wrap mb-7 tracking-wide min-[425px]:text-4xl">
            {t('HERO_TITLE_1')}
          </h1>
          <h1 className="text-4xl font-bold text-wrap mb-5 tracking-wide min-[425px]:text-2xl">
            {t('HERO_TITLE_2')}{t('HERO_SUBTITLE_1')}
          </h1>
        </div>

        <div className="absolute w-4/6 h-full lg:right-2 md:right-1 min-[425px]:right-1">
          <ComputersCanvas />
        </div>

        <div className="absolute bottom-[10%] xl:left-[41%] lg:left-[38%] md:left-[34%] min-[425px]:left-[5.5rem]">
          <a className="border-[3px] border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium text-white px-12 py-2 inline-block hover:bg-white hover:text-[#2e2e2e] transition-colors"
            href="https://drive.google.com/file/d/1XiSkGb9CDEEThyN75MQien74hwIAllzC/view?usp=sharing">
            {t('BUTTOM_HERO_TITLE')}
          </a>
        </div>

      </div>
    </>
  )
}

