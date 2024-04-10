import React from 'react'
import Styles from '@/styles/components/Navbar.module.css'
import { useTheme } from '@/context/ThemeContext';
import logo from '@/assets/logo/logo.png';
import logo_light from '@/assets/logo/logo_light.png';
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import Image from 'next/image'

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    const themeMapping = {
        'dark':{
            'container': Styles.containerDark,
            'icon':   <BsSunFill className={Styles.darkIcon}/>,
            'logo': logo

        },
        'light':{
            'container': Styles.containerLight,
            'icon':  <BsFillMoonFill className={Styles.lightIcon} />,
            'logo': logo_light
        }
        
    }

  return (
    <div className={`${Styles.container} ${themeMapping[theme]['container']}`}>
    <a  to={"/"}>
      <Image src={themeMapping[theme]['logo']} className={Styles.headerLogo} />
    </a>
    <div className={Styles.headerLinksContainer}>
      <a  className={Styles.headerLink} href={"/"}>
        Home
      </a>
      <a  className={Styles.headerLink} href={"/#about"}>
        About
      </a>
      <a  className={Styles.headerLink} href={"/#skills"}>
        Skills
      </a>
      <a  className={Styles.headerLink} href={"/#projects"}>
        Projects
      </a>
      <a  className={Styles.headerLink} href={"/#workex"}>
        Work Experience
      </a>
      <a  className={Styles.headerLink} href={"/#research"}>
        Research Work
      </a>
      <a
        
        className= {`${Styles.headerLink} ${Styles.lastLink}`}
        id="last_link"
        href={"/#contact"}
      >
        Contact
      </a>
    </div>
    <button
      onClick={() => {
        toggleTheme();
        localStorage.setItem("theme", theme)
      }}
    >
      {
        themeMapping[theme]['icon']
      }
    </button>
  </div>
  )
}
