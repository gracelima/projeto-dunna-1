import styles from '../styles/pages/artista.module.css'

export function Art4 () {
    return (
      <>
         

        <div className={styles.container}>
          <img className={styles.imagePerfil} src="./illustration/artista4/8art4.png" alt="" />
          <div>
          <h1 className={styles.nome}>Duda Art</h1>
          <a href="https://www.instagram.com/artby_lissa/" target="_blank">
          <img className={styles.iconeInsta} src="https://cdn-icons-png.flaticon.com/512/1400/1400813.png" alt="icone instagram" /></a>
          </div>
          <p className={styles.paragrafo}>  <p>Ilustração</p> "Faço desenhos desde quando me entendo por gente, sempre amei desenhar e escrever sejam textos mais poéticos ou histórias crônicas, meu foco é mais ilustração, espero algum dia poder conseguir usufruir 100% de todo o meu amor por desenho/'</p>
          
        </div>
        
         { <div className={styles.containerImages}>
        <img className={styles.images} src="./illustration/artista4/1art4.jpg" alt="" />
        <img className={styles.images} src="./illustration/artista4/5art4.jpg" alt="" />
        <img className={styles.images} src="./illustration/artista4/3art4.jpg" alt="" />
        <img className={styles.images} src="./illustration/artista4/4art4.jpg" alt="" />
        <img className={styles.images} src="./illustration/artista4/2art4.jpg" alt="" />
        <img className={styles.images} src="./illustration/artista4/6art4.jpg" alt="" />
        <img className={styles.images} src="./illustration/artista4/7art4.jpg" alt="" />
        <img className={styles.images} src="./illustration/artista4/8art4.jpg" alt="" />
          </div> }

          <div className={styles.contatos}>
            <p className={styles.textContato}>Entre em Contato
            <p>Darknesslissa@gmail.com</p></p>
          </div>
      </>
    )
  }