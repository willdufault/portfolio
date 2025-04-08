import wpiSeal from '../../assets/images/wpi-seal.png'
import Card from '../Card'
import Section from '../Section'
import Spacer from '../Spacer'

export default function Experience() {
  type EducationData = {
    school: string
    degree: string
    minor?: string
    description?: string[]
    startDate: string
    endDate: string
    imageSrc: string
  }

  const educations: EducationData[] = [
    {
      school: 'Worcester Polytechnic Institute',
      degree: 'BS in Computer Science',
      minor: 'Minor in Data Science',
      description: [
        "GPA: 3.91, Dean's List for all semesters",
        'Graduated with High Distinction (equivalent to Summa Cum Laude)',
        'Member of Upsilon Pi Epsilon (Computer Science Honor Society)',
      ],
      startDate: 'Aug 2020',
      endDate: 'May 2024',
      imageSrc: wpiSeal,
    },
  ]

  return (
    <>
      <Section id="education" title="Education">
        <div className="flex flex-col gap-y-3">
          {educations.map((education, index) => (
            <Card key={index}>
              <div className="sm:flex sm:gap-4">
                <img
                  src={education.imageSrc}
                  alt={`${education.school} seal`}
                  className="w-24 h-24 mb-2 md:mb-0"
                />
                <div>
                  <h4 className="font-semibold">{education.school}</h4>
                  <p>{education.degree}</p>
                  {education.minor === undefined ? (
                    <></>
                  ) : (
                    <p>{education.minor}</p>
                  )}
                  <sub className="bottom-0 text-zinc-500">
                    {education.startDate} &rarr; {education.endDate}
                  </sub>
                  <ul className="list-disc list-inside pl-3 pt-1">
                    {education.description === undefined ? (
                      <></>
                    ) : (
                      education.description.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))
                    )}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Spacer></Spacer>
      </Section>
    </>
  )
}
