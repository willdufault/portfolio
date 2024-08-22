import Section from '../../Section';
import SectionTitle from '../../SectionTitle';
import Spacer from '../../Spacer';
import Card from '../../Card';
import Skill from '../../Skill';
import beecologyScreenshot from '../../../assets/images/beecology-screenshot.jpg'
import hiveGameplay from '../../../assets/images/hive-gameplay.jpg'
import dropboxScreenshot from '../../../assets/images/dropbox-screenshot.jpg'
import kickstarterScreenshot from '../../../assets/images/kickstarter-screenshot.jpg'

export default function Projects() {
  interface ProjectData {
    name: string
    description: string
    skills: string[][]
    imageSrc: string
    url: string
  }

  const projects: ProjectData[] = [
    {
      name: 'Beecology',
      description: 'Revamped the user interface of a citizen science web app.',
      skills: [
        ['TypeScript', 'frontend'],
        ['Angular', 'frontend'],
        ['Bulma', 'frontend'],
        ['Agile', 'devops'],
      ],
      imageSrc: beecologyScreenshot,
      url: 'https://beecology.wpi.edu/webapp_new/main/#/app/home'
    },
    {
      name: 'HexAround',
      description: 'Created a Hex-like game with an infinite hexagonal board.',
      skills: [
        ['Java', 'backend'],
        ['Data structures', 'backend'],
        ['Algorithms', 'backend'],
        ['Design patterns', 'backend'],
      ],
      imageSrc: hiveGameplay,
      url: 'https://github.com/willdufault/hexaround'
    },
    {
      name: '24Ours',
      description: 'Developed the back end of a cloud-based file-sharing app.',
      skills: [
        ['JavaScript', 'frontend'],
        ['Python', 'backend'],
        ['Node', 'backend'],
        ['Express', 'backend'],
        ['AWS', 'devops'],
      ],
      imageSrc: dropboxScreenshot,
      url: 'https://github.com/willdufault/24ours'
    },
    {
      name: 'Punchender',
      description: 'Built a full-stack, cloud-based crowdfunding platform.',
      skills: [
        ['JavaScript', 'frontend'],
        ['React', 'frontend'],
        ['MySQL', 'database'],
        ['AWS', 'devops'],
        ['Agile', 'devops']
      ],
      imageSrc: kickstarterScreenshot,
      url: 'https://github.com/willdufault/punchender'
    }
  ]

  return (
    <>
      <Section id='projects' isAlternate={true}>
        <SectionTitle>Projects</SectionTitle>
        <div className='flex flex-col gap-3 sm:grid sm:grid-cols-2'>
          {projects.map((project, index) =>
            <div key={index} className='relative border overflow-hidden rounded-sm group'>
              <img src={project.imageSrc} alt={`${project.name} screenshot`} className='w-full' />
              <div className='absolute w-full -bottom-56 sm:-bottom-60 group-hover:bottom-0 transition-[bottom]'>
                <Card>
                  <a href={project.url} className='font-semibold hover:underline'>{project.name}</a>
                  <p>{project.description}</p>
                  <div className='flex flex-wrap gap-1 pt-3'>
                    {project.skills.map(([skill, category], index) =>
                      <Skill key={index} category={category}>{skill}</Skill>
                    )}
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
        <Spacer></Spacer>
      </Section>
    </>
  )
}