import { ReactNode } from 'react'

type Props = {
  category: string
  children: ReactNode
}

export default function Skill({ category, children }: Props) {
  const categoryColors: Map<string, string[]> = new Map<string, string[]>([
    ['frontend', ['bg-rose-500', 'hover:bg-rose-600', 'text-rose-50']],
    ['backend', ['bg-blue-500', 'hover:bg-blue-600', 'text-blue-50']],
    ['database', ['bg-amber-500', 'hover:bg-amber-600', 'text-amber-50']],
    ['devops', ['bg-teal-500', 'hover:bg-teal-600', 'text-teal-50']],
  ])

  const [backgroundColor, hoverBackgroundColor, textColor] =
    categoryColors.get(category)!

  return (
    <>
      <div
        className={`rounded-full ${backgroundColor} ${hoverBackgroundColor} ${textColor} px-3 py-1 transition-colors`}
      >
        {children}
      </div>
    </>
  )
}
