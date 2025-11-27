import Image from 'next/image'

interface AvatarProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function Avatar({ src, alt, size = 'lg' }: AvatarProps) {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32 lg:w-48 lg:h-48',
    xl: 'w-48 h-48 lg:w-64 lg:h-64',
  }

  const imageSizes = {
    sm: 64,
    md: 96,
    lg: 192,
    xl: 256,
  }

  return (
    <div
      className={`
        ${sizes[size]}
        rounded-full
        ring-4 ring-blue-500/20 dark:ring-blue-400/40
        shadow-xl
        overflow-hidden
        transition-all duration-300
        hover:scale-105
        hover:ring-blue-500/40 dark:hover:ring-blue-400/60
        hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/30
      `}
    >
      <Image
        src={src}
        alt={alt}
        width={imageSizes[size]}
        height={imageSizes[size]}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  )
}
