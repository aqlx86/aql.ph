'use client'

import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import { SITE_CONFIG } from '@/lib/constants'

export default function Hero() {
  const handleViewWork = () => {
    window.open('https://github.com/aqlx86', '_blank', 'noopener,noreferrer')
  }

  const handleConnect = () => {
    const element = document.querySelector('#connect')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Avatar */}
        <div className="flex justify-center">
          <Avatar src="/images/me.jpg" alt={SITE_CONFIG.name} size="lg" />
        </div>

        {/* Name & Title */}
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-6xl font-bold text-balance">
            {SITE_CONFIG.name}
          </h1>
          <p className="text-lg lg:text-xl text-neutral-600 dark:text-neutral-400">
            {SITE_CONFIG.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-lg lg:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto text-balance">
          {SITE_CONFIG.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button onClick={handleViewWork} variant="primary" size="lg">
            View My Work →
          </Button>
          <Button onClick={handleConnect} variant="secondary" size="lg">
            Let&apos;s Connect
          </Button>
        </div>
      </div>
    </section>
  )
}
