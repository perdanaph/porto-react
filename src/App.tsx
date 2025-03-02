import About from './components/About';
import Article from './components/Article';
import Experience from './components/Experience';
import Profile from './components/Profile';
import Project from './components/Project';
import { useState, useEffect } from 'react';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  return (
    <div className='w-full bg-gray-900 dark:bg-slate-50 dark:bg-dot-gray-300 bg-dot-white/20 text-white dark:text-black font-medium relative duration-300'>
      <div className='absolute pointer-events-none inset-0 flex items-center justify-center'></div>
      <main className='max-w-7xl mx-auto flex flex-col md:flex-row md:gap-20 relative md:px-4'>
        <div className='flex-1 md:sticky md:top-0 md:left-0 h-dvh'>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className='px-3 mt-6 ml-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded'
          >
            {darkMode ? <MdDarkMode /> : <MdOutlineLightMode />}
          </button>
          <Profile />
        </div>
        <div className='flex-1 mb-14 md:my-24 space-y-16 md:space-y-24'>
          <About />
          <Experience />
          <Project />
          <Article />
          <small className='flex justify-center md:justify-end'>
            Made with ❤ Perdana Putro Harwanto
          </small>
        </div>
      </main>
    </div>
  );
}

export default App;
