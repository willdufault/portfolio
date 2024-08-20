import Section from '../../Section';
import SectionTitle from '../../SectionTitle';
import Spacer from '../../Spacer';
import Card from '../../Card';
import Skill from '../../Skill';
import bjsLogo from '../../../assets/images/bjs-logo.jpg';
import upworkLogo from '../../../assets/images/upwork-logo.jpg'
import wpiSeal from '../../../assets/images/wpi-seal.png'

export default function Experience() {
  interface JobData {
    position: string
    company: string
    description: string[]
    startDate: string
    endDate: string
    skills: string[][]
    imageSrc: string
  }

  const jobs: JobData[] = [
    {
      position: 'Software Engineer',
      company: 'BJ\'s Wholesale Club',
      description: [
        'Identified and deleted 94 TB of duplicate data from S3 using Python, saving $26,000 per year (projected)',
        'Decreased backup time by 98% by using Python with multithreading to concurrently copy files to S3',
        'Automated EMR key rotation using Python, Jenkins, and Secrets Manager, enhancing data security'
      ],
      startDate: 'Aug 2024',
      endDate: 'Present',
      skills: [
        ['Python', 'backend'],
        ['Multithreading', 'backend'],
        ['AWS', 'devops'],
        ['Jenkins', 'devops'],
        ['Agile', 'devops']
      ],
      imageSrc: bjsLogo
    },
    {
      position: 'Web Developer',
      company: 'Upwork',
      description: [
        'Built websites using React and TypeScript that were tailored to client-defined specifications',
        'Designed and implemented responsive user interfaces using Tailwind, Bootstrap, and Figma',
        'Maintained regular communication with clients to gather feedback and confirm satisfaction'
      ],
      startDate: 'Jul 2024',
      endDate: 'Present',
      skills: [
        ['React', 'frontend'],
        ['TypeScript', 'frontend'],
        ['Tailwind', 'frontend'],
        ['Bootstrap', 'frontend'],
        ['Figma', 'frontend']
      ],
      imageSrc: upworkLogo
    },
    {
      position: 'Software Engineer Intern',
      company: 'BJ\'s Wholesale Club',
      description: [
        'Earned the Pacesetter Award for ranking in the top 10% of interns in the Management Development Program',
        'Implemented 3 SageMaker lifecycle configurations to stop idle instances, saving $3,500 per year',
        'Engineered an alert system to monitor EC2 instances using Python, Lambda, and SNS, saving $2,300 per year'
      ],
      startDate: 'May 2023',
      endDate: 'Aug 2024',
      skills: [
        ['Python', 'backend'],
        ['AWS', 'devops'],
        ['Jenkins', 'devops'],
        ['Docker', 'devops'],
        ['Agile', 'devops']
      ],
      imageSrc: bjsLogo
    },
    {
      position: 'Undergraduate Teaching Assistant',
      company: 'WPI',
      description: [
        'Taught the fundamentals of Java and object-oriented programming to a 400+ students',
        'Expedited grading by 10%+ by using Python to automatically reject incorrect responses',
        'Troubleshot problems in labs and office hours and guided students through testing and debugging'
      ],
      startDate: 'Sep 2023',
      endDate: 'Dec 2023',
      skills: [
        ['Java', 'backend'],
        ['Python', 'backend'],
        ['OOP', 'backend'],
        ['Regex', 'backend'],
        ['Debugging', 'backend']
      ],
      imageSrc: wpiSeal
    }
  ]

  return (
    <>
      <Section id='experience'>
        <SectionTitle>Experience</SectionTitle>
        <div className='flex flex-col gap-y-3'>
          {jobs.map((job, index) =>
            <Card key={index}>
              <div className='sm:flex sm:gap-4'>
                <img src={job.imageSrc} alt={`${job.company}'s logo`} className='w-24 h-24 mb-2 rounded-xl' />
                <div>
                  <h4 className='font-semibold'>{job.position}</h4>
                  <p>{job.company}</p>
                  <sub className='bottom-0 text-zinc-500'>{job.startDate} &rarr; {job.endDate}</sub>
                  <ul className='list-disc list-inside pl-3 pt-1'>
                    {job.description.map((bullet, index) =>
                      <li key={index}>{bullet}</li>
                    )}
                  </ul>
                  <div className='flex flex-wrap gap-1 pt-3'>
                    {job.skills.map(([skill, category], index) =>
                      <Skill key={index} category={category}>{skill}</Skill>
                    )}
                  </div>
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