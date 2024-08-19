import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Card({ children }: Props) {
  return (
    <>
      <div className='border border-gray-200 bg-white p-4 rounded-sm'>
        {children}
      </div>
    </>
  )
}