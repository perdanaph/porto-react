import { useSection } from '../../hooks/useSection';

const About = () => {
  const section = useSection();
  return (
    <section
      id='about'
      className='space-y-4'
    >
      <h2
        className={`title-section ${section === 'about' ? 'sticky-title' : ''}`}
      >
        about
      </h2>
      <div className='px-4'>
        <span className='h-px w-full px-4 bg-white dark:bg-black md:block hidden relative'></span>
      </div>
      <div className='space-y-4 text-gray-400 dark:text-gray-600 mx-4'>
        <p className='text-justify'>
          I am a graduate with a Bachelor's degree in Computer Science from the
          Informatics Study Program Jember University.{' '}
          <span className='dark:text-black text-white'>
            I am a responsible individual, thorough in my work, possessing
            strong leadership qualities, good communication skills, effective
            teamwork, excellent time management, and the ability to adapt easily
            to new environments.{' '}
          </span>
          I have more experience using{' '}
          <span className='dark:text-black text-white'>
            Laravel, CI, MySQL, ExpressJS, ReactJs, NextJS, Golang, Flutter.
          </span>{' '}
          I’m active in participating in activities on campus either as a
          participant or committee. This makes it easier for me to socialize
          with a new environment, and makes it easier for me when I want to
          communicate with new people.
        </p>
        <p className='italic text-cyan-400 hover:text-cyan-400 duration-300'>
          &#47;* Programming is an art where abstract ideas are transformed into
          concrete works that can be seen and felt. *&#47;
        </p>
      </div>
    </section>
  );
};

export default About;
