import Pill from '@/components/ui/Pill'
import { SKILLS } from '@/lib/constants'

export default function Skills() {
  const skillsByCategory = {
    frontend: SKILLS.filter((s) => s.category === 'frontend'),
    backend: SKILLS.filter((s) => s.category === 'backend'),
    tools: SKILLS.filter((s) => s.category === 'tools'),
    interests: SKILLS.filter((s) => s.category === 'interests'),
  }

  return (
    <section id="skills" className="py-16 lg:py-24 px-6 bg-neutral-100/50 dark:bg-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            The tools and technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-neutral-700 dark:text-neutral-300">
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsByCategory.frontend.map((skill) => (
                <Pill key={skill.name}>{skill.name}</Pill>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-neutral-700 dark:text-neutral-300">
              Backend Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsByCategory.backend.map((skill) => (
                <Pill key={skill.name}>{skill.name}</Pill>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-neutral-700 dark:text-neutral-300">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsByCategory.tools.map((skill) => (
                <Pill key={skill.name}>{skill.name}</Pill>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-neutral-700 dark:text-neutral-300">
              Beyond Code
            </h3>
            <div className="flex flex-wrap gap-3">
              {skillsByCategory.interests.map((skill) => (
                <Pill key={skill.name} interactive={false}>
                  {skill.name === 'Gaming' && '🎮 '}
                  {skill.name === 'Motorcycles' && '🏍️ '}
                  {skill.name === 'Open Source' && '🌐 '}
                  {skill.name}
                </Pill>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
