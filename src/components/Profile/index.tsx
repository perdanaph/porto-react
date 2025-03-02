import { SOCIAL_MEDIA } from '../../utils/constant';
import { MdInsertDriveFile, MdWhatsapp } from 'react-icons/md';
import Sidenav from '../Sidenav';

const Profile = () => {
  return (
    <section className='h-full flex flex-col md:justify-between py-14 md:py-24 px-4'>
      <div>
        <h1 className='font-bold text-4xl md:text-5xl'>Perdana Putro H.</h1>
        <h2 className='font-medium text-xl md:text-2xl my-2 text-cyan-400'>
          Web Developer
        </h2>
        <p className='text-gray-400 dark:text-gray-600 mb-4'>
          Passionate web developer crafting seamless, responsive, and
          user-friendly digital experiences.
        </p>
      </div>
      <Sidenav />
      <div className='flex flex-wrap gap-4 items-center'>
        <a
          href='https://wa.me/6282134927657'
          target='_blank'
          className='duration-500'
          rel='noreferrer'
        >
          <button className='flex gap-2 items-center border p-1 text-[14px] leading-3 font-normal rounded dark:bg-slate-50 bg-gray-900'>
            {/* <SiWhatsapp size={20} /> */}
            <MdWhatsapp
              size={24}
              className='dark:bg-white bg-gray-900'
            />
          </button>
        </a>
        {SOCIAL_MEDIA.map((item, index) => (
          <a
            href={item.link}
            target='_blank'
            key={index}
            className='dark:bg-slate-50 bg-gray-900 duration-500 w-fit'
            rel='noreferrer'
          >
            <item.image
              size={32}
              title={item.title}
              className='border p-1.5 rounded dark:bg-slate-50 bg-gray-900'
            />
          </a>
        ))}
        <a
          href='/CV_PERDANA_PUTRO_HARWANTO.pdf'
          target='_blank'
          className='duration-500'
          rel='noopener noreferrer'
        >
          <button className='flex gap-2 items-center border px-3 py-[9px] text-[14px] leading-3 font-normal rounded dark:bg-slate-50 bg-gray-900'>
            CV <MdInsertDriveFile size={16} />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Profile;
