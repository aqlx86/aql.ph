import { HTMLAttributes } from 'react'

interface PillProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  interactive?: boolean
}

export default function Pill({ children, interactive = true, className = '', ...props }: PillProps) {
  return (
    <div
      className={`
        inline-flex items-center gap-2
        px-4 py-2 rounded-full
        text-sm font-medium
        bg-neutral-100 dark:bg-neutral-800
        text-neutral-700 dark:text-neutral-300
        ${interactive ? 'transition-all duration-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 cursor-default' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
