import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Title({ children }: Props) {
  return (
    <>
      <h2 className="text-2xl font-semibold pb-4">{children}</h2>
    </>
  )
}
