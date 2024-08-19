import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionTitle({ children }: Props) {
  return (
    <>
      <h2 className='text-2xl font-semibold pb-4'>{children}</h2>
    </>
  )
}