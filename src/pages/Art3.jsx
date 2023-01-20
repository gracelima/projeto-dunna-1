import styles from '../styles/pages/artista.module.css'

export function Art3 () {
    return (
      <>
         

        <div className={styles.container}>
          <img className={styles.imagePerfil} src="./perfis/profileart3.jpg"  />
          <div>
          <h1 className={styles.nome}>Emily Rodrigues </h1>
          <a href="https://www.instagram.com/giragira.soll/" target="_blank">
          <img className={styles.iconeInsta} src="https://cdn-icons-png.flaticon.com/512/1400/1400813.png" alt="icone instagram" /></a>
          </div>
          <p className={styles.paragrafo}>  <p>Fotografia</p> "Fotógrafo desde os 11 anos e de lá pra cá venho aprimorando os meus estudos de ângulos, enquadramento e cores, descobrindo aos poucos o meu estilo fotográfico. Minhas fotos são voltadas ao urbano e ao natural (fotografia de paisagem), porém gosto de registrar gestos e expressões de pessoas." </p>
          
        </div>
        
         { <div className={styles.containerImages}>
         <img className={styles.images} src="./illustration/artista3/1art3.jpg" alt="" />
         <img className={styles.images} src="./illustration/artista3/2art3.jpg" alt="" />
         <img className={styles.images} src="./illustration/artista3/3art3.jpg" alt="" />
         <img className={styles.images} src="./illustration/artista3/4art3.jpg" alt="" />
         <img className={styles.images} src="./illustration/artista3/5art3.jpg" alt="" />
         <img className={styles.images} src="./illustration/artista3/6art3.jpg" alt="" />

          </div> }

          <div className={styles.contatos}>
            <p className={styles.textContato}>Entre em Contato
            <p>emilyrodrigues0987@gmail.com</p></p>
          </div>
      </>
    )
  }