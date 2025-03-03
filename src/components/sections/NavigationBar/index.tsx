import Section from '../../Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function openMenu() {
    document.body.style.touchAction = 'none'
    setIsMenuOpen(true)
  }

  function closeMenu() {
    document.body.style.touchAction = 'auto'
    setIsMenuOpen(false)
  }

  return (
    <>
      <Section id='navigation-bar'>
        <div className='py-2 flex justify-between items-center'>
          <button onClick={openMenu} className='flex block sm:hidden'>
            <FontAwesomeIcon icon={faBars} className='h-6 w-6'></FontAwesomeIcon>
          </button>
          <div className={`fixed top-0 sm:static py-6 px-4 sm:p-0 h-dvh sm:h-fit bg-slate-50 sm:bg-transparent z-10 transition-[left] ${isMenuOpen ? 'left-0' : '-left-40'}`}>
            <button onClick={closeMenu} className='flex sm:hidden'>
              <FontAwesomeIcon icon={faXmark} className='h-6 w-6'></FontAwesomeIcon>
            </button>
            <div className='flex flex-col sm:flex-row justify-start gap-4 p-4 sm:p-0'>
              <a href="#experience" className='hover:underline' onClick={closeMenu}>Experience</a>
              <a href="#projects" className='hover:underline' onClick={closeMenu}>Projects</a>
              <a href="#skills" className='hover:underline' onClick={closeMenu}>Skills</a>
              <a href="#education" className='hover:underline' onClick={closeMenu}>Education</a>
            </div>
          </div>
          <div className='flex items-center gap-x-4'>
            <a href='mailto:wrdufault@outlook.com' className='group flex'>
              <FontAwesomeIcon icon={faEnvelope} className='w-6 h-6 md:h-5 md:w-5 text-zinc-500 group-hover:text-black transition-colors' />
            </a>
            <a href='https://www.linkedin.com/in/willdufault' className='group flex'>
              <FontAwesomeIcon icon={faLinkedinIn} className='w-6 h-6 md:h-5 md:w-5 text-zinc-500 group-hover:text-black transition-colors' />
            </a>
            <a href='https://github.com/willdufault' className='group flex'>
              <FontAwesomeIcon icon={faGithub} className='w-6 h-6 md:h-5 md:w-5 text-zinc-500 group-hover:text-black transition-colors' />
            </a>
            {/* <a href='https://www.upwork.com/freelancers/~0176292ee3fa699089' className='group flex'>
              <FontAwesomeIcon icon={faUpwork} className='w-6 h-6 md:h-5 md:w-5 text-zinc-500 group-hover:text-black transition-colors' />
            </a> */}
          </div>
        </div>
      </Section>
    </>
  )
}