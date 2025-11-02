import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  width?: 'full' | 'standard' | 'narrow'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function Container({
  children,
  width = 'standard',
  padding = 'md',
  className = '',
}: ContainerProps) {
  const widthClasses = {
    full: 'w-full',
    standard: 'max-w-7xl mx-auto',
    narrow: 'max-w-3xl mx-auto',
  }

  const paddingClasses = {
    none: '',
    sm: 'px-4 py-8',
    md: 'px-6 py-16 md:py-24',
    lg: 'px-6 py-24 md:py-32',
    xl: 'px-6 py-32 md:py-40',
  }

  return (
    <div className={`${widthClasses[width]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  )
}
