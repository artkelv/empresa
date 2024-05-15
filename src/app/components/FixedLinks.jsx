import icon2 from '../../../public/icons/icon_2.svg'
import instagram_icon from '../../../public/icons/instagram_icon.png'

import Image from 'next/image'
import styles from '../styles/fixedLinks.module.css'

const FixedLinks = () => {
    return (
        <div className={`${styles.fixedLinks} animate__animated animate__fadeIn`}>
            <a href="https://wa.me/61982434868" target='_blank'>
                <Image src={icon2} alt='' width={0} height={0} />
            </a>

            <a href="https://www.instagram.com/web_tech.dev?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target='_blank'>
                <Image src={instagram_icon} alt='' width={0} height={0} />
            </a>
        </div>
    )
}

export default FixedLinks