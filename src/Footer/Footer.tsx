import s from './footer.module.sass'
import tt from '../media/social/TikTok_white.svg'
import vk from '../media/social/VK_white.svg'
import inst from '../media/social/Instagram_white.svg'

const Footer = () => {
  return (
    <div className={s.root}>
      © 2022 All rights reserved
      <div className={s.social}>
        <a
          className={s.href}
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tt} alt="tiktok" className={s.icon} />
        </a>
        <a
          className={s.href}
          href="https://vk.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={vk} alt="vk" className={s.icon} />
        </a>
        <a
          className={s.href}
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={inst} alt="inst" className={s.icon} />
        </a>
      </div>
    </div>
  )
}

export default Footer