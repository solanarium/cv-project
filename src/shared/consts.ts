// export const contacts = [
//   'CareerOS Academy - Barcelona, Spain',
//   'claudette.lening@cosacademy.edu',
//   '+34 612 345 678',
//   'linkedin.com/in/claudette-lening',
// ]

import type { ExperienceType } from './types'

export const experience: ExperienceType = [
  {
    id: 1,
    date: '10.24 - 02.25',
    title: 'CyberFort Solutions',
    position: 'Project Coordinator',
    location: 'Barcelona, Spain',
    data: [
      'Oversaw scheduling, documentation, and progress tracking for internal IT infrastructure upgrades.',
      'Worked alongside security analysts to identify workflow bottlenecks and recommend process improvements.',
      'Assisted in communication between vendors and reviewed contracts for third-party software providers.',
    ],
  },
  {
    id: 2,
    date: '05.24 - 08.24',
    title: 'BrightWave Digital',
    position: 'Summer Project Management Intern',
    location: 'Barcelona, Spain',
    data: [
      'Coordinated deadlines and deliverables for a cross-functional team handling client advertising campaigns.',
      'Curated internal status reports summarizing campaign metrics, budget usage, and upcoming project milestones.',
      'Developed foundational practices in agile project management tools and team collaboration platforms.',
    ],
  },
  {
    id: 3,
    date: '06.23 - 08.23',
    title: 'DeltaNova Technologies',
    position: 'Summer Business Operations Intern',
    location: 'Madrid, Spain',
    data: [
      'Streamlined project documentation and meeting records to support efficient product launch execution.',
      'Engaged in client update calls, providing project status recaps and next-step outlines.',
      'Prepared post-project reviews that uncovered a 15% increase in team efficiency opportunities and documented best practices.',
    ],
  },
]
