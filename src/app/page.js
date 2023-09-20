import styles from './styles/page.module.css'
import LandingPage from './pages/LandingPage'

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPage />
    </main>
  )
}
