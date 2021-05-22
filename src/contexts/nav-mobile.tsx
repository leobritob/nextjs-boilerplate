import React, { useState, createContext, useContext } from 'react'

interface INavMobileContext {
  isVisible: boolean
}

interface INavMobileProvider {
  navMobile: INavMobileContext
  setNavMobile: (navMobile: INavMobileContext) => void
}

const defaultValue: INavMobileProvider = {
  navMobile: { isVisible: false },
  setNavMobile: (prev) => !prev.isVisible,
}

const NavMobileContext = createContext<INavMobileProvider>(defaultValue)

const useNavMobile = () => useContext(NavMobileContext)

const NavMobileProvider: React.FC = ({ children }: { children: React.ReactNode }) => {
  const [navMobile, setNavMobile] = useState<INavMobileContext>({ isVisible: false })

  return <NavMobileContext.Provider value={{ navMobile, setNavMobile }}>{children}</NavMobileContext.Provider>
}

export { useNavMobile, NavMobileProvider }
