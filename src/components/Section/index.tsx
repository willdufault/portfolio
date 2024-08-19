import { ReactNode } from 'react'

interface Props {
  id: string
  isAlternate?: boolean
  children: ReactNode
}

export default function Section({ id, isAlternate = false, children }: Props) {
  return (
    <>
      <section id={id} className={`${isAlternate ? 'bg-[#fcfcfc]' : 'bg-white'}`}>
        <div className='max-w-screen-md mx-auto p-4'>
          {children}
        </div>
      </section>
    </>
  )
}