import Section from '../../Section';
import SectionTitle from '../../SectionTitle';
import Spacer from '../../Spacer';
import Card from '../../Card';
import wpiSeal from '../../../assets/images/wpi-seal.png'

export default function Experience() {
  interface EducationData {
    school: string
    degree: string
    minor?: string
    startDate: string
    endDate: string
    imageSrc: string
  }

  const educations: EducationData[] = [
    {
      school: 'Worcester Polytechnic Institute',
      degree: 'BS in Computer Science',
      minor: 'Minor in Data Science',
      startDate: 'Aug 2020',
      endDate: 'May 2024',
      imageSrc: wpiSeal
    }
  ]

  return (
    <>
      <Section id='education'>
        <SectionTitle>Education</SectionTitle>
        <div className='flex flex-col gap-y-3'>
          {educations.map((education, index) =>
            <Card key={index}>
              <div className='flex gap-x-6 items-center'>
                <img src={education.imageSrc} alt={`${education.school} seal`} className='w-24 h-24 mb-2 md:mb-0' />
                <div>
                  <h4 className='font-semibold'>{education.school}</h4>
                  <p>{education.degree}</p>
                  {education.minor !== undefined ? <p>{education.minor}</p> : <></>}
                  <sub className='bottom-0 text-zinc-500'>{education.startDate} &rarr; {education.endDate}</sub>
                </div>
              </div>
            </Card>
          )}
        </div>
        <Spacer></Spacer>
      </Section>
    </>
  )
}