import bjsLogo from '../../assets/images/bjs-logo.jpg'
import ctcLogo from '../../assets/images/coffee-to-campfire-logo.jpg'
import wpiSeal from '../../assets/images/wpi-seal.png'
import Card from '../Card'
import Section from '../Section'
import Skill from '../Skill'
import Spacer from '../Spacer'
// import upworkLogo from '../../assets/images/upwork-logo.jpg'

export default function Experience() {
  type PositionData = {
    title: string
    description: string[]
    startDate: string
    endDate: string
  }
  type CompanyData = {
    company: string
    imageSrc: string
    skills: string[][]
    positions: PositionData[]
  }

  const jobs: CompanyData[] = [
    {
      company: "BJ's Wholesale Club",
      imageSrc: bjsLogo,
      skills: [
        ['Python', 'backend'],
        ['AWS', 'backend'],
        ['Jenkins', 'devops'],
        ['Docker', 'devops'],
        ['Bash', 'devops'],
      ],
      positions: [
        {
          title: 'Cloud Software Engineer',
          description: [
            'Led a cross-departmental team to delete 690+ TB of duplicate data from S3 using Python, saving $185,000 per year',
            'Decreased S3 backup time by 98% by using Python with multithreading to efficiently copy files between folders',
            'Streamlined S3 lifecycle policy creation by using Python to convert Excel data to JSON, saving 2 hours per week',
          ],
          startDate: 'Aug 2024',
          endDate: 'Present',
        },
        {
          title: 'Cloud Software Engineer Intern',
          description: [
            'Earned the Pacesetter Award for ranking in the top 10% of interns in the Management Development Program',
            'Implemented 3 SageMaker lifecycle configurations to automatically stop idle instances, saving $3,500 per year',
            'Engineered an alert system to monitor EC2 instances using Python, Lambda, and SNS, saving $2,300 per year',
          ],
          startDate: 'May 2023',
          endDate: 'Aug 2024',
        },
      ],
    },
    {
      company: 'Coffee to Campfire',
      skills: [
        ['React', 'frontend'],
        ['Bootstrap', 'frontend'],
        ['TypeScript', 'frontend'],
        ['GitHub Actions', 'devops'],
        ['CI/CD', 'devops'],
      ],
      imageSrc: ctcLogo,
      positions: [
        {
          title: 'Web Developer',
          description: [
            'Designed and developed a responsive website tailored to client specifications using TypeScript, React, and Bootstrap',
            'Accelerated deployment speed by 50% by automating build and deployment with a GitHub Actions CI/CD pipeline',
            'Maintained weekly communication with clients to gather feedback and iteratively improve and update the website',
          ],
          startDate: 'Sep 2024',
          endDate: 'Present',
        },
      ],
    },
    {
      company: 'WPI',
      skills: [
        ['Java', 'backend'],
        ['Python', 'backend'],
        ['Data structures', 'backend'],
        ['Algorithms', 'backend'],
        ['Design Patterns', 'backend'],
      ],
      imageSrc: wpiSeal,
      positions: [
        {
          title: 'Undergraduate Teaching Assistant',
          description: [
            'Mentored and taught the fundamentals of Java and object-oriented programming to a class of 400+ students',
            'Expedited grading by 10%+ by using Python and regular expressions to automatically reject incorrect responses',
            'Troubleshot problems in labs and office hours and guided 5+ students per session through testing and debugging',
          ],
          startDate: 'Sep 2023',
          endDate: 'Dec 2023',
        },
      ],
    },
    // {
    //   position: 'Web Developer',
    //   company: 'Upwork',
    //   description: [
    //     // todo: Build up a portfolio first.
    //   ],
    //   startDate: 'Jul 2024',
    //   endDate: 'Present',
    //   skills: [
    //     ['React', 'frontend'],
    //     ['TypeScript', 'frontend'],
    //     ['Bootstrap', 'frontend'],
    //     ['Tailwind', 'frontend']
    //   ],
    //   imageSrc: upworkLogo
    // },
  ]

  return (
    <>
      <Section id="experience" title="Experience" isAlternate={true}>
        <div className="flex flex-col gap-y-3">
          {jobs.map((company, company_index) => (
            <Card key={company_index}>
              <div className="sm:flex sm:gap-4">
                <img
                  src={company.imageSrc}
                  alt={`${company.company}'s logo`}
                  className="w-24 h-24 mb-2 rounded-sm"
                />
                <div>
                  {company.positions.map((position, position_index) => (
                    <div className="pb-3" key={position_index}>
                      <h4 className="font-semibold">{position.title}</h4>
                      <p>{company.company}</p>
                      <sub className="bottom-0 text-zinc-500">
                        {position.startDate} &rarr; {position.endDate}
                      </sub>
                      <ul className="list-disc list-inside pl-3 pt-1">
                        {position.description.map((bullet, bullet_index) => (
                          <li key={bullet_index}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {company.skills.map(([skill, category], index) => (
                      <Skill key={index} category={category}>
                        {skill}
                      </Skill>
                    ))}
                  </div>
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
