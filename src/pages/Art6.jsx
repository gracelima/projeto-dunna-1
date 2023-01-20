import styles from '../styles/pages/artista.module.css'

export function Art6 () {
    return (
      <>
         

        <div className={styles.container}>
          <img className={styles.imagePerfil} src= "./perfis/profileart6.jpg"  />
          <div>
          <h1 className={styles.nome}>Swank</h1>
          <a href="https://www.instagram.com/swankzin/" target="_blank">
          <img className={styles.iconeInsta} src="https://cdn-icons-png.flaticon.com/512/1400/1400813.png" alt="icone instagram" /></a>
          </div>
          
          <p className={styles.paragrafo}>  <p>Música</p> "Fui Mc de batalha, e sempre gostei de música desde muito novo. Sempre escutei de tudo, de raça negra ao funk mais pesado.
As batalhas me ajudaram a dar início no rap, e em menos de um ano nas batalhas eu já me via escrevendo minhas próprias letras. Hoje eu tenho músicas de trap, pop, detroit, drill entre outras que eu ainda não lancei. Não sou mais mc de batalha, pois preferi focar 100% em música.
Trampo de segurança em um posto de saúde e o dinheiro que eu ganho com o trampo, eu invisto no meu sonho."</p>
          
        </div>
        
         { <div className={styles.containerMusicas}>
          <h1>Clique para ouvir </h1>
          <br />
          <p>Gliter Brilhante</p>
          <audio src="/audio/glitterbrilhante.wav" controls preload='metadata' ></audio>
          <br />
          <br />
          <p>Paradise feat. Rav</p>
          <audio className={styles.audio}src="/audio/Paradise.mp3" controls preload='metadata' ></audio>
          <br />
          
       
          </div> }

          <div className={styles.contatos}>
            <p className={styles.textContato}>Entre em Contato
            <p>Swankmc085@gmail.com</p></p>
          </div>
      </>
    )
  }