import Card from '@/components/ui/Card'
import { ABOUT_CONTENT, WHAT_I_DO_CONTENT } from '@/lib/constants'

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">About</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A bit about me and what I do
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* About Me Card */}
          <Card>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl" role="img" aria-label="briefcase">
                  💼
                </span>
                <h3 className="text-2xl font-bold">{ABOUT_CONTENT.title}</h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {ABOUT_CONTENT.description}
              </p>
            </div>
          </Card>

          {/* What I Do Card */}
          <Card>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl" role="img" aria-label="target">
                  🎯
                </span>
                <h3 className="text-2xl font-bold">{WHAT_I_DO_CONTENT.title}</h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {WHAT_I_DO_CONTENT.description}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
