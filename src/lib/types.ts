export interface SocialLink {
  name: string
  href: string
  icon: string
  color: string
  hoverColor: string
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'interests'
  icon?: string
}

export interface NavItem {
  name: string
  href: string
}
