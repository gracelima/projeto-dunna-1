import styles from '../styles/pages/artista.module.css'

export function Art1 () {
    return (
      <>
         

        <div className={styles.container}>
          <img className={styles.imagePerfil} src="./perfis/profileart1.jpg" alt="" />
          <h1 className={styles.nome}>Melissa Prates
          
          </h1>
          
          <p className={styles.paragrafo}>  <p>Desing & Ilustração</p> "Atualmente atendo pelo nome artístico, Melzier.
Desenvolvi a proximidade com a arte no início da minha formação acadêmica, no curso de Design. Em 2018, estudando uma disciplina denominada Representação Visual, aflorou em mim o interesse pelo desenho.
No decorrer da pandemia tive a oportunidade de desenvolver a pintura a óleo e intimidade com gravuras. Durante 17 meses fui bolsista do Museu da UFC (MAUC) e atuei no Laboratório de Práticas Experimentais em Arte e Educação Museal (LAPEArte/Mauc), onde ministrei algumas oficinas com temas dos meus estudos, também junto dos meus amigos bolsistas e coordenadores fundamos o curso de Desenho Básico do Mauc."</p>
          
        </div>
        
         { <div className={styles.containerImages}>
        <img className={styles.images} src="./illustration/artista1/1art1.jpg" alt="" />
          <img className={styles.images} src="./illustration/artista1/1art2.jpg" alt="" />
          <img className={styles.images} src="./illustration/artista1/1art3.jpg" alt="" />
          <img className={styles.images} src="./illustration/artista1/1art4.jpg" alt="" />
          <img className={styles.images} src="./illustration/artista1/1art5.jpg" alt="" />
          <img className={styles.images} src="./illustration/artista1/1art6.jpg" alt="" />
          <img className={styles.images} src="./illustration/artista1/1art7.jpg" alt="" />
          <img className={styles.images} src="./illustration/artista1/1art8.jpg" alt="" />
          <img className={styles.images} src="./illustration/artista1/1art9.jpg" alt="" />
          <img className={styles.images} src="./illustration/artista1/1art10.jpg" alt="" />


          </div> }

          <div className={styles.contatos}>
            <p className={styles.textContato}>Entre em Contato
            <a href="http://www.melzier.com.br/"><p className={styles.linkContato}>www.melzier.com.br</p></a> 
            </p>
          </div>
      </>
    )
  }