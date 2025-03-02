import { useSection } from '../../hooks/useSection';

const Article = () => {
  const section = useSection();
  return (
    <section
      id='articles'
      className='space-y-2'
    >
      <h2
        className={`title-section mb-4 ${
          section === 'articles' ? 'sticky-title' : ''
        }`}
      >
        articles
      </h2>
      <div className='px-4'>
        <span className='h-px w-full px-4 bg-white dark:bg-black md:block hidden relative'></span>
      </div>
      <div className='grid p-2'>
        <p className='animate-pulse mx-auto my-5'>Coming Soon</p>
      </div>
    </section>
  );
};

export default Article;
