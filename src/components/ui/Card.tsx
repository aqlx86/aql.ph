import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
}

export default function Card({ children, hover = true, className = '', ...props }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl p-6 lg:p-8
        bg-white dark:bg-neutral-900
        border border-neutral-200 dark:border-neutral-800
        ${hover ? 'card-glow' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
