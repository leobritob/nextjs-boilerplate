import React from 'react'

import { NavMobileProvider } from './nav-mobile'

export const AppProvider: React.FC = ({ children }: { children: React.ReactNode }) => {
  return <NavMobileProvider>{children}</NavMobileProvider>
}
