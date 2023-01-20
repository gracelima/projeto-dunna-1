import styles from '../styles/components/footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>
        Desenvolvido por Grace Ferreira.
      </p>
      <a href="https://www.instagram.com/ggraxie/" target="_blank">
          <img className={styles.iconeInsta} src="https://cdn-icons-png.flaticon.com/512/1400/1400813.png" alt="icone instagram" />
          </a>


    </footer>
  )
}