import { SocialLink as SocialLinkType } from '@/lib/types'

interface SocialLinkProps {
  social: SocialLinkType
  showLabel?: boolean
}

const icons = {
  linkedin: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  github: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
    </svg>
  ),
  youtube: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
  paypal: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.067 8.478c.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5a.805.805 0 00-.794.68l-.04.22-.63 3.993-.028.15a.806.806 0 01-.795.68H7.723a.48.48 0 01-.477-.558L7.764 18h1.261c.83 0 1.523-.636 1.618-1.462l.584-3.372c.095-.827.788-1.463 1.618-1.463h.5c3.238 0 5.774-1.314 6.514-5.12.257-1.313.193-2.447-.3-3.327.492.88.556 2.014.3 3.327-.74 3.806-3.276 5.12-6.514 5.12h-.5c-.83 0-1.523.636-1.618 1.463l-.584 3.372c-.095.826-.788 1.462-1.618 1.462H7.264l.518-3.082a.805.805 0 00-.795-.938H4.72a.48.48 0 01-.477-.558l1.03-6.513c.095-.827.788-1.463 1.618-1.463h7.782c3.238 0 5.774-1.314 6.514-5.12.257-1.313.193-2.447-.3-3.327.492.88.556 2.014.3 3.327z"/>
    </svg>
  ),
}

export default function SocialLink({ social, showLabel = true }: SocialLinkProps) {
  const Icon = icons[social.icon as keyof typeof icons]

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center gap-2
        p-3 rounded-lg
        text-neutral-600 dark:text-neutral-400
        ${social.hoverColor}
        transition-all duration-200
        hover:scale-105 active:scale-95
        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2
      `}
      aria-label={social.name}
    >
      <span className={social.color}>{Icon}</span>
      {showLabel && <span className="text-sm font-medium">{social.name}</span>}
    </a>
  )
}
