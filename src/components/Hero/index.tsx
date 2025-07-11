import Section from '../Section'
import Spacer from '../Spacer'

export default function Hero() {
  return (
    <>
      <Section id="hero">
        <div className="max-w-[33rem] mx-auto pt-4">
          <h1 className="text-3xl font-semibold pb-2">Will Dufault</h1>
          <p>
            A software engineer interested in full-stack development and cloud
            computing. Currently working as a Cloud Engineer at BJ's Wholesale
            Club.
          </p>
          {/* and as a freelance Web Developer on Upwork */}
        </div>
        <Spacer></Spacer>
      </Section>
    </>
  )
}
