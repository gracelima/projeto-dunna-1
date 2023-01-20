import styles from '../styles/pages/artista.module.css'

export function Art5 () {
    return (
      <>
         
        <div className={styles.container}>
          <img className={styles.imagePerfil} src="./perfis/profileart5.jpg"  />
          <div>
          <h1 className={styles.nome}>Davi Morais</h1>
          <a href="https://www.instagram.com/danos.morais_/" target="_blank">
          <img className={styles.iconeInsta} src="https://cdn-icons-png.flaticon.com/512/1400/1400813.png" alt="icone instagram" /></a>
          </div>
          <p className={styles.paragrafo}>  <p>Ilustração</p> "Comecei a praticar desenho com 13 anos, influenciado majoritariamente pelas animações e quadrinhos que consumia. Raramente vario o objeto de estudo das minhas ilustrações, na maior parte das vezes são apenas rostos expressivos." </p>
          
        </div>
        
         { <div className={styles.containerImages}>
         <img className={styles.images} src="./illustration/artista5/1art5.jpg" alt="" />
         <img className={styles.images} src="./illustration/artista5/2art5.jpg" alt="" />
         <img className={styles.images} src="./illustration/artista5/3art5.jpg" alt="" />
         <img className={styles.images} src="./illustration/artista5/4art5.jpg" alt="" />
         <img className={styles.images} src="./illustration/artista5/5art5.jpg" alt="" />
         <img className={styles.images} src="./illustration/artista5/6art5.jpg" alt="" />

          </div> }

          <div className={styles.contatos}>
            <p className={styles.textContato}>Entre em Contato
            <p>davimoraiss1403@gmail.com</p></p>
          </div>
      </>
    )
  }