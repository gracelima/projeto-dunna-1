import styles from '../styles/components/footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>
        Desenvolvido por Grace Ferreira.
      </p>
    </footer>
  )
}