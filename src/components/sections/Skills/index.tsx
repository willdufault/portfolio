import Section from '../../Section';
import SectionTitle from '../../SectionTitle';
import Skill from '../../Skill';
import Spacer from '../../Spacer';
import awsCcpLogo from '../../../assets/images/aws-certified-cloud-practitioner-certification.png'
import awsCsaaLogo from '../../../assets/images/aws-certified-solutions-architect-associate-certification.png'

export default function Skills() {
  interface CertificationData {
    name: string
    imageSrc: string
    url: string
  }

  const frontEndSkills: string[] = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Svelte', 'Bootstrap', 'Tailwind', 'Bulma'
  ]
  const backEndSkills: string[] = [
    'Python', 'Java', 'C', 'C++', 'Node', 'Express', 'AWS', 'Data structures', 'Algorithms', 'Design patterns'
  ]
  const databaseSkills: string[] = [
    'SQL', 'MySQL', 'Oracle', 'RDS', 'MongoDB'
  ]
  const devopsSkills: string[] = [
    'Git', 'Jenkins', 'Docker', 'Bash', 'Linux' 
  ]

  interface AllSkillsData {
    skills: string[]
    title: string,
    category: string
  }

  const allSkills: AllSkillsData[] = [
    { skills: frontEndSkills, title: 'Front end', category: 'frontend' },
    { skills: backEndSkills, title: 'Back end', category: 'backend' },
    { skills: databaseSkills, title: 'Databases', category: 'database' },
    { skills: devopsSkills, title: 'DevOps', category: 'devops' },
  ]

  const certifications: CertificationData[] = [
    {
      name: 'AWS Certified Solutions Architect – Associate',
      imageSrc: awsCsaaLogo,
      url: 'https://www.credly.com/badges/b71f2044-72f0-4afe-9185-2090be6cfaf4/'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      imageSrc: awsCcpLogo,
      url: 'https://www.credly.com/badges/603b982a-6936-4c68-8b64-a07cae33f6d0/'
    },
  ]

  return (
    <>
      <Section id='skills' isAlternate={true}>
        <SectionTitle>Skills</SectionTitle>
        <div className='flex flex-col gap-y-5'>
          {allSkills.map((skillData, index) =>
            <div key={index}>
              <h3 className='text-lg font-semibold pb-1'>{skillData.title}</h3>
              <div className='flex flex-wrap gap-1'>
                {skillData.skills.map((skill, index) =>
                  <Skill key={index} category={skillData.category}>{skill}</Skill>
                )}
              </div>
            </div>
          )}
          <div>
            <h3 className='text-lg font-semibold pb-1'>Certifications</h3>
            <div className='grid gap-3 grid-cols-2 sm:grid-cols-3'>
              {certifications.map((certification, index) =>
                <div key={index} className='border border-gray-200 bg-white p-4 rounded-xl hover:drop-shadow transition-[filter]'>
                  <div className='text-center'>
                    <img src={certification.imageSrc} alt={`${certification.name} logo`} className='w-24 h-24 mx-auto mb-2' />
                    <a href={certification.url} className='hover:underline'>{certification.name}</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Spacer></Spacer>
      </Section>
    </>
  )
}