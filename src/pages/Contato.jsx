import { useState } from 'react'
import { Header } from '../components/HeaderContato'
import contatoImg from '/contato.png'
/*
import { database } from '../service/firebase'
import { ref, push, set } from 'firebase/database'*/

import styles from '../styles/pages/contato.module.css'



export function Contato() {
 

  return(
    <>
      <Header title="FAÇA PARTE DA NOSSA GALERIA DE EXPOSITORES"    image={contatoImg} />
      <div className={styles.email}>
        
        <h3>entre em contato por email para saber mais</h3>
        <h2>projetodunnasite@gmail.com</h2>
      </div>
    </>
  )
}