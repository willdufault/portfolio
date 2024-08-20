import Section from '../../Section';
import Spacer from '../../Spacer';

export default function Hero() {
  return (
    <>
      <Section id='hero'>
        <div className='max-w-lg mx-auto pt-4'>
          <h1 className='text-3xl font-semibold pb-2'>Hi, I'm Will!</h1>
          <p>I'm a software engineer interested in full-stack development and cloud computing. I work as a Software Engineer at BJ's Wholesale Club and as a freelance Web Developer on Upwork.</p>
        </div>
        <Spacer></Spacer>
      </Section>
    </>
  )
}