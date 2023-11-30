'use client'

import LandingPage from './pages/LandingPage'
import FixedLinks from './components/FixedLinks'
import { ModalContextProvider } from './contexts/ModalContext'

import 'animate.css'

export default function Home() {
  return (
    <main>
      <ModalContextProvider>
        <LandingPage />
        <FixedLinks />
      </ModalContextProvider>
    </main>
  )
}
