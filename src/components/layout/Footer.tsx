import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'
import SocialLink from '@/components/ui/SocialLink'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8">
          {/* Section Title */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">Let&apos;s Connect</h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Feel free to reach out through any of these platforms
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <SocialLink key={social.name} social={social} showLabel />
            ))}
          </div>

          {/* Copyright */}
          <div className="pt-8 space-y-1">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              © {currentYear} {SITE_CONFIG.name}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-500">
              Built with Next.js & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
