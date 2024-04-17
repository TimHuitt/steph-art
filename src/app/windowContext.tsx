'use client'
 
import { createContext, useContext, useState, useRef, useMemo, Dispatch, SetStateAction, useEffect } from 'react'

interface windowContextType {
  width: number
  setWidth: Dispatch<SetStateAction<number>>
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
  mainRef: React.RefObject<HTMLDivElement>
  aboutRef: React.RefObject<HTMLDivElement>
  portfolioRef: React.RefObject<HTMLDivElement>
  shopRef: React.RefObject<HTMLDivElement>
  customRef: React.RefObject<HTMLDivElement>
}
 
export const WindowContext = createContext<windowContextType | null>(null)
 
export const WindowProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [ width, setWidth ] = useState<number>(0)
  const [ selected, setSelected ] = useState<string>('')
  const mainRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const shopRef = useRef<HTMLDivElement>(null)
  const customRef = useRef<HTMLDivElement>(null)

  const value = useMemo(() => ({
    width,
    setWidth,
    selected,
    setSelected,
    mainRef,
    aboutRef,
    portfolioRef,
    shopRef,
    customRef,
  }),[selected, width])

  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>
}

export const useWindowContext = () => {
  const context = useContext(WindowContext)
  if (!context) {
    throw new Error('No Provider')
  }
  return context
}