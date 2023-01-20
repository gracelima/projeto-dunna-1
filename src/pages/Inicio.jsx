import {useState, useEffect, useRef} from 'react'
import { Header } from '../components/HeaderInicio'
import inicioImg from '/homeimg.png'
import { motion } from 'framer-motion'
import styles from '../styles/pages/inicio.module.css'

import image1 from '/carrosel/1art3.jpg'
import image2 from '/carrosel/2art3.jpg'
import image3 from '/carrosel/1art1.jpg'
import image4 from '/carrosel/1art6.jpg'
import image5 from '/carrosel/1art4.jpg'
import image6 from '/carrosel/8art4.png'
import image7 from '/carrosel/3art5.jpeg'
import image8 from '/carrosel/1art5.jpg'

const images = [image1, image2, image3, image4, image5, image6, image7, image8]

export function Inicio() {
const carousel = useRef();
const [width, setWidth] = useState(0)

useEffect (() => {
console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])
  
  return (
    <>

      <Header  title="MERGULHE EM UMA GALERIA ONLINE REPLETA DE ARTISTAS INDEPENDENTES DA TERRA DO SOL. " image={inicioImg} />
      <h4 className={styles.paragrafo}>ARRASTE PARA O LADO E CONFIRA UMA PRÉVIA DAS OBRAS</h4>
      <div className={styles.Inicio}>
      
        <motion.div ref={carousel} className={styles.carousel} whileTap={{cursor: "grabbing"}}>
          <motion.div className={styles.inner}
          drag="x"
          dragConstraints={{right: 0, left: -width}}
          initial={{ x: 100}}
          animate={{x: 0}}
          transition={{duration :0.8 }}
          >
            {images.map(image => (
              <motion.div className={styles.item} key={image}>
                <img src={image} alt="texto alt" />
                
              </motion.div>

            ))}

          </motion.div>
        </motion.div>

      </div>
    </>
  )
}