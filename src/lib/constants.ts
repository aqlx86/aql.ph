import { SocialLink, Skill, NavItem } from './types'

export const SITE_CONFIG = {
  name: 'Arnel Q. Labarda',
  shortName: 'aql',
  tagline: 'programmer · gamer · rider',
  description: 'Web Application Developer & Open Source Enthusiast crafting elegant digital solutions.',
  url: 'https://aql.ph',
  author: {
    name: 'Arnel Q. Labarda',
    email: 'hello@aql.ph',
    linkedIn: 'aqlx86',
    github: 'aqlx86',
  },
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Connect', href: '#connect' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    href: 'https://ph.linkedin.com/in/aqlx86',
    icon: 'linkedin',
    color: 'text-[#0A66C2]',
    hoverColor: 'hover:bg-[#0A66C2]/10',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/aqlx86',
    icon: 'github',
    color: 'text-neutral-900 dark:text-neutral-100',
    hoverColor: 'hover:bg-neutral-900/10 dark:hover:bg-neutral-100/10',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@PSKMoto?sub_confirmation=1',
    icon: 'youtube',
    color: 'text-[#FF0000]',
    hoverColor: 'hover:bg-[#FF0000]/10',
  },
  {
    name: 'PayPal',
    href: 'https://paypal.me/aqlx86',
    icon: 'paypal',
    color: 'text-[#00457C]',
    hoverColor: 'hover:bg-[#00457C]/10',
  },
]

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'HTML/CSS', category: 'frontend' },

  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'Databases', category: 'backend' },

  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Linux', category: 'tools' },

  // Interests
  { name: 'Open Source', category: 'interests' },
  { name: 'Gaming', category: 'interests' },
  { name: 'Motorcycles', category: 'interests' },
]

export const ABOUT_CONTENT = {
  title: 'About Me',
  description: `Passionate web developer with a love for creating elegant, user-friendly applications.
    I specialize in modern JavaScript frameworks and enjoy building products that make a difference.
    When I'm not coding, you'll find me gaming, riding motorcycles, or contributing to open source projects.`,
}

export const WHAT_I_DO_CONTENT = {
  title: 'What I Do',
  description: `Full-stack development with a focus on React, Next.js, and Node.js.
    I build fast, accessible, and beautiful web applications that solve real problems.
    Freelancer and open source enthusiast.`,
}
