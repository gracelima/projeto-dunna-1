import styles from '../styles/pages/portfolio.module.css'

const list = [
  {
    id: 1,
    nome: 'Melissa Prates',
    nicho: 'Desing & Ilustração',
    imagem: "./illustration/artista1/1art2.jpg",
    link:'Art1'
  },

  

  {
    id: 3,
    nome: 'Emily Rodrigues',
    nicho: 'Fotografia',
    imagem: "./illustration/artista3/2art3.jpg",
    link:'Art3'
  },

  {
    id: 2,
    nome: 'Mario Ramon',
    nicho: 'Artes Visuais',
    imagem: "./illustration/artista2/backart2.jpg",
    link:'Art2'
  },


  {
    id: 4,
    nome: 'Duda Art',
    nicho: 'Ilustração',
    imagem: './illustration/artista4/5art4.jpg',
    link:'Art4'
  },

  {
    id: 5,
    nome: 'Davi Morais',
    nicho: 'Ilustração',
    imagem: "./illustration/artista5/1art5.jpg",
    link:'Art5'
  },

  {
    id: 6,
    nome: 'Swank',
    nicho: 'Música',
    imagem: "./illustration/artista6/backart6.1.jpg",
    link:'Art6'
  },
]

export function Portfolio() {
  return (
    <>
     
      <div className={styles.projectsContainer}>
        <h2 className={styles.projectTitle}>CONHEÇA NOSSA GALERIA</h2>
        <div className={styles.cardsContainer}>
          {list.map(project => {
            return (
              
              <div className={styles.card} key={project.id}>
                <a className={styles.cardLink}href={project.link} rel="noneferrer">
                <img className={styles.cardImage} src={project.imagem} />
                <h1 className={styles.cardName}>{project.nome}</h1>
                <p className={styles.cardText}>{project.nicho}</p>
                </a>
              </div>
              
            )
          })}
        </div>
        
      </div>
      
    </>
  )
}