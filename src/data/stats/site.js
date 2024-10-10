import dayjs from 'dayjs';

const data = [
  {
    label: 'Stars on GitHub for this repository',
    key: 'stargazers_count',
    link: 'https://github.com/kunalarya/personal-site/stargazers',
  },
  {
    label: 'Watchers on GitHub',
    key: 'subscribers_count',
    link: 'https://github.com/kunalarya/personal-site/stargazers',
  },
  {
    label: 'Forks on GitHub',
    key: 'forks',
    link: 'https://github.com/kunalarya/personal-site/network',
  },
  {
    label: 'Number of coffee cups consumed during development',
    value: '∞',
  },
  {
    label: 'Lint warnings avoided',
    value: '0', // checked via GitHub workflow
  },
  {
    label: 'Open GitHub issues',
    key: 'open_issues_count',
    link: 'https://github.com/kunalarya/personal-site/issues',
  },
  {
    label: 'Last updated on',
    key: 'pushed_at',
    link: 'https://github.com/kunalarya/personal-site/commits',
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    label: 'Lines of code in this site',
    value: '2300',
    link: 'https://github.com/kunalarya/personal-site/graphs/contributors',
  },
];

export default data;
