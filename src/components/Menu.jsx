import { Link } from 'react-router-dom'

import styles from '../styles/components/menu.module.css'



export function Menu() {
  return(
     
    <ul className={styles.menuContainer}>
      
      <img className={styles.logo} src= "/logo.ico" alt="" />
      
      <li className={styles.menuItem}>
      <Link className={styles.menuLink} to="/">INICIO</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/sobre">SOBRE</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/portfolio">ARTISTAS</Link>
      </li>
      <li className={styles.menuItem}>
        <Link className={styles.menuLink} to="/contato">CONTATOS</Link>
      </li>
    </ul>
  )
}