import { ReactNode } from 'react'
import Title from '../Title'

type Props = {
  id: string
  title?: string
  isAlternate?: boolean
  children: ReactNode
}

export default function Section({
  id,
  title = '',
  isAlternate = false,
  children,
}: Props) {
  const renderTitle = (): ReactNode | null => {
    if (title === '') {
      return null
    }
    return <Title>{title}</Title>
  }
  return (
    <>
      <section
        id={id}
        className={`${isAlternate ? 'bg-slate-50' : 'bg-white'}`}
      >
        <div className="max-w-screen-md mx-auto p-4">
          {renderTitle()}
          {children}
        </div>
      </section>
    </>
  )
}
