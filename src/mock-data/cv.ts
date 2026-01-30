import type { CV } from '../types'

export const cv: CV = {
  fullName: 'Claudette Lening',
  university: 'CareerOS Academy - Barcelona, Spain',
  email: 'claudette.lening@cosacademy.edu',
  phoneNumber: '+34 612 345 678',
  linkedInURL: 'linkedin.com/in/claudette-lening',
  sections: [
    {
      title: 'Relevant Experience',
      type: 'major',
      data: [
        {
          id: 1,
          date: '10.24 - 02.25',
          title: 'CyberFort Solutions',
          description: 'Project Coordinator',
          location: 'Barcelona, Spain',
          summary: [
            'Oversaw scheduling, documentation, and progress tracking for internal IT infrastructure upgrades.',
            'Worked alongside security analysts to identify workflow bottlenecks and recommend process improvements.',
            'Assisted in communication between vendors and reviewed contracts for third-party software providers.',
          ],
        },
        {
          id: 2,
          date: '05.24 - 08.24',
          title: 'BrightWave Digital',
          description: 'Summer Project Management Intern',
          location: 'Barcelona, Spain',
          summary: [
            'Coordinated deadlines and deliverables for a cross-functional team handling client advertising campaigns.',
            'Curated internal status reports summarizing campaign metrics, budget usage, and upcoming project milestones.',
            'Developed foundational practices in agile project management tools and team collaboration platforms.',
          ],
        },
        {
          id: 3,
          date: '06.23 - 08.23',
          title: 'DeltaNova Technologies',
          description: 'Summer Business Operations Intern',
          location: 'Madrid, Spain',
          summary: [
            'Streamlined project documentation and meeting records to support efficient product launch execution.',
            'Engaged in client update calls, providing project status recaps and next-step outlines.',
            'Prepared post-project reviews that uncovered a 15% increase in team efficiency opportunities and documented best practices.',
          ],
        },
      ],
    },
    {
      title: 'Education',
      type: 'major',
      data: [
        {
          id: 1,
          date: '09.23 - 05.24',
          title: 'CareerOS Academy',
          description: 'MSc in Project Management',
          location: 'Barcelona, Spain',
          summary: [
            'Engaged in comprehensive coursework on Agile methodologies, risk management, and stakeholder analysis; led a capstone project simulating a cross-functional product launch.',
          ],
        },
        {
          id: 2,
          date: '09.19 - 05.22',
          title: 'CareerOS Academy',
          description: 'BA in Business Administration',
          location: 'Barcelona, Spain',
          summary: [
            'Completed coursework in corporate finance, marketing strategy, and organizational behavior; collaborated on a consulting project for a local startup to optimize operations.',
          ],
        },
      ],
    },
    {
      title: 'Extracurricular & Awards',
      type: 'minor',
      data: [
        {
          title: '09.21 - 05.21',
          text: 'President of the Data Analytics Club at CareerOS Academy',
        },
      ],
    },
    {
      title: 'Additional information & skills',
      type: 'minor',
      data: [
        {
          title: 'Languages:',
          text: 'Spanish (Native) English (Fluent) Italian (Intermediate)',
        },
        {
          title: 'Additional Skills:',
          text: 'NIST Cybersecurity Framework Microsoft Office Kali Linux Incident Response Planning Firewall Configuration AWS Security AES Encryption',
        },
      ],
    },
  ],
}
