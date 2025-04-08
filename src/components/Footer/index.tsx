import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Section from '../Section'

export default function Footer() {
  const year: number = new Date().getFullYear()

  return (
    <>
      <Section id="footer" isAlternate={true}>
        <div className="flex flex-col items-center sm:flex-row-reverse sm:justify-between gap-y-4 py-2">
          <div className="flex items-center gap-4">
            <a href="mailto:wrdufault@outlook.com" className="group flex">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-6 h-6 md:h-5 md:w-5 text-zinc-500 group-hover:text-black transition-colors"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/willdufault"
              className="group flex"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="w-6 h-6 md:h-5 md:w-5 text-zinc-500 group-hover:text-black transition-colors"
              />
            </a>
            <a href="https://github.com/willdufault" className="group flex">
              <FontAwesomeIcon
                icon={faGithub}
                className="w-6 h-6 md:h-5 md:w-5 text-zinc-500 group-hover:text-black transition-colors"
              />
            </a>
            {/* <a href='https://www.upwork.com/freelancers/~0176292ee3fa699089' className='group flex'>
              <FontAwesomeIcon icon={faUpwork} className='w-6 h-6 md:h-5 md:w-5 text-zinc-500 group-hover:text-black transition-colors' />
            </a> */}
            <a
              href="https://github.com/willdufault/willdufault.github.io"
              className="group flex"
            >
              <FontAwesomeIcon
                icon={faCode}
                className="w-6 h-6 md:h-5 md:w-5 text-zinc-500 group-hover:text-black transition-colors"
              />
            </a>
          </div>
          <p className="text-zinc-500">Copyright &copy; {year} Will Dufault</p>
        </div>
      </Section>
    </>
  )
}
