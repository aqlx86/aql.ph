import Card from '@/components/ui/Card'
import SocialLink from '@/components/ui/SocialLink'
import { SOCIAL_LINKS } from '@/lib/constants'

export default function Connect() {
  return (
    <section id="connect" className="py-16 lg:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Contact Card */}
        <Card>
          <div className="text-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Connect with me</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                Choose your preferred platform to get in touch
              </p>
            </div>

            {/* Social Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SOCIAL_LINKS.map((social) => (
                <div key={social.name} className="flex justify-center">
                  <SocialLink social={social} showLabel />
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Available for freelance projects and collaborations
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
