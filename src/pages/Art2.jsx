import styles from '../styles/pages/artista.module.css'

export function Art2 () {
    return (
      <>
         
        <div className={styles.container}>
          <img className={styles.imagePerfil} src="./perfis/profileart2.jpg"  />
          <div>
          <h1 className={styles.nome}>Mario Ramon</h1>
          <a href="https://www.instagram.com/mramon013/" target="_blank">
          <img className={styles.iconeInsta} src="https://cdn-icons-png.flaticon.com/512/1400/1400813.png" alt="icone instagram" /></a>
          </div>
          <p className={styles.paragrafo}>  <p>Artes Visuais</p> "Negro, 26 anos, natural de Fortaleza e residindo em Juazeiro do Norte. Acadêmico do Curso em Artes Visuais, Artista, produtor cultural e pesquisador da Cultura Popular Brasileira e Afrobrasileira. </p>
          
        </div>
        
         { <div className={styles.imageArt2}>
         <img className={styles.images} src="./illustration/artista2/1art2.png" alt="" />
         <p classname={styles.paragrafoArt2}> <b>Opere- Galhapis de longa visão</b>  <br /> <br />

"Ossaim, filho de Nanã irmão de Oxumarê, Éuá e Obaluaê, era o senhor das folhas, da ciência e das ervas, orixá que conhece o sagrado da cura e mistério da vida" ¹ <br /><br />

Euê Uassá ( as folhas funcionam) <br /><br />

Em meu processo de procura pelo graveto, fui em busca de algo que me representasse, algo que ligasse ao meu ancestral, meu passado e que escrevesse minha história. Durante o percurso no campus, veio em mente a saudação do senhor das folhas "Euê Ussá" que significa " as folhas funcionam " Ossaim é o orixá senhor de todas as folhas, sem folha não tem orixá, logo fui à procura de meu OPERE, cajado de longa visão, ferramentas de Ossaim, que significa vidência, cura e ciência, vidência essa de uma ancestralidade que muito tem a nos curar de um passado sangrento, de uma educação colonizadora que muito nós marcam e padronizam, que assim como sem folha não se faz orixá, sem ciência,sem liberdade, sem sagrado, não se faz uma educação viva e libertadora. Assim faço de meu galhapis a minha ferramenta de libertação e de uma longa visão, visando um futuro presente de uma tão sonhada educação palmeira. <br />

¹ - PRANDI, Reginaldo, Mitologia dos orixás. São Paulo: Companhia das Letras, 2001. <br />

Mario Ramon,2022</p>
          </div> }

          <div className={styles.contatos}>
            <p className={styles.textContato}>Entre em Contato
            <p>mmarioramon65@gmail.com</p></p>
          </div>
      </>
    )
  }