import { useTranslation } from 'react-i18next';
import { InfiniteLoopSlider } from './InfiniteLoopSlider';

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Astro', 'UI/UX', 'Node', 'Python', 'Java', 'PowerBI', 'Pandas', 'Matplotlib', 'NumPy'];
const DURATION = 15000;
const ROWS = 3;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => .5 - Math.random());

const Tag = ({ text }) => (
  <div className='tag'><span>#</span> {text}</div>
);

const Marquee = () => {

  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center justify-center w-screen'>
      <section className="flex flex-col items-center text-center m-4">
        <h1 className="text-6xl font-semibold text-wrap mb-3 tracking-wide min-[425px]:text-4xl">
          {t('MARQUEE_TITLE')}
        </h1>
        <p className="max-w-[1400px] text-xl text-left px-6 sm:px-20 w-[100ch] text-pretty mx-auto">
          {t('MARQUEE_SUBTITLE')}
        </p>
      </section>
      <div className='tag-list'>
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
            {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
              <Tag text={tag} key={tag} />
            ))}
          </InfiniteLoopSlider>
        ))}
        <div className='fade' />
      </div>
    </div>
  )
}
export default Marquee;