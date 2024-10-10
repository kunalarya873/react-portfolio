const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'Web Development', 'ML Engineering'],
  },
  {
    title: 'Django',
    competency: 5,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Django Rest Framework',
    competency: 5,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools', 'Data Engineering', 'Web Development'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Tools', 'Data Engineering', 'Web Development'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases', 'Web Development', 'Languages'],
  },
  {
    title: 'MySQL',
    competency: 3,
    category: ['Databases', 'Web Development', 'Languages'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'Redis',
    competency: 3,
    category: ['Databases', 'Web Development'],
  },
  {
    title: 'HTML + CSS + JS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'TypeScript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Celery',
    competency: 3,
    category: ['Tools', 'Python'],
  },
  {
    title: 'ElasticSearch',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Machine Learning',
    competency: 4,
    category: ['ML Engineering', 'Data Science'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
