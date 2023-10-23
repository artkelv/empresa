import icon2 from '../../public/icons/icon_2.svg'
import instagram_icon from '../../public/icons/instagram_icon.png'

import styles from './styles/page.module.css'
import LandingPage from './pages/LandingPage'
import Image from 'next/image'

export default function Home() {
  return (
    <main className={styles.main}>
      <LandingPage />
      <div className={styles.fixedLinks}>
        <a href="https://wa.me/61984977155">
          <Image src={icon2} alt='' width={0} height={0} />
        </a>

        <a href="http://instagram.com">
          <Image src={instagram_icon} alt='' width={0} height={0} />
        </a>
      </div>
    </main>
  )
}
