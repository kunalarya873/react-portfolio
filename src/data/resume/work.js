/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Scitome Publication House',
    position: 'Backend Developer',
    url: 'http://scitomepublicationhouse.com',
    startDate: '2024-08-01',
    summary: 'Working on the backend of Scitome’s content management system with a focus on efficient data handling and API integrations using Django.',
    highlights: [
      'Implemented scalable backend architecture for the publication house’s main site.',
      'Optimized data queries to improve application response time by 30%.',
      'Developed APIs to enhance content accessibility across platforms.',
    ],
  },
  {
    name: 'Kuberns',
    position: 'Backend Developer',
    url: 'http://kuberns.com',
    startDate: '2024-09-01',
    summary: 'Building backend infrastructure with Django to manage deployment and data validation tasks effectively.',
    highlights: [
      'Designed and integrated backend services for Kubernetes-powered applications.',
      'Collaborated on the development of a license management system with focus on security and user validation.',
    ],
  },
  {
    name: 'Abun.com',
    position: 'Full-Stack Web Developer',
    url: 'http://abun.com',
    startDate: '2024-09-01',
    endDate: '2024-10-05',
    summary: 'Enhanced website functionality and user experience using Django and React, focusing on key feature design and user interface improvement.',
    highlights: [
      'Improved user engagement through refined UI elements.',
      'Optimized backend processes to streamline operations and scalability.',
    ],
  },
  {
    name: 'The Entrepreneurship Network',
    position: 'Backend Developer',
    url: 'https://www.entrepreneurshipnetwork.net/',
    startDate: '2024-08-01',
    endDate: '2024-09-30',
    summary: 'Contributed to backend development using Django, Flask, and DRF, focusing on performance, scalability, and API integrations.',
    highlights: [
      'Developed robust backend infrastructure using Django and Flask.',
      'Collaborated with the frontend team to ensure seamless integration of backend APIs.',
    ],
  },
];

export default work;
