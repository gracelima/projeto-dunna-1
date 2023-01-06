import { useState } from 'react'
import { Header } from '../components/HeaderContato'
import contatoImg from '../assets/contato.svg'
import { database } from '../service/firebase'
import { ref, push, set } from 'firebase/database'
import styles from '../styles/pages/contato.module.css'

export function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleInputValueNome(event) {
    setNome(event.target.value)
  }

  function handleInputValueEmail(event) {
    setEmail(event.target.value)
  }

  function handleInputValueMensagem(event) {
    setMensagem(event.target.value)
  }

  function handleCreateMessage(event) {
    event.preventDefault()
    
    const messageListRef = ref(database, 'mensagens') //criei minha coleção
    const newMessageRef = push(messageListRef) //nova mensagem vai para dentro da coleção mensagens
    set(newMessageRef, {  //criando cada mensagem que vai ser salva
      nome: nome,
      email: email,
      texto: mensagem
    })

  }

  return(
    <>
      <Header title="FAÇA PARTE DA NOSSA GALERIA DE EXPOSITORES" image={contatoImg} />
      <div>
        
        <form className={styles.form} onSubmit={handleCreateMessage}>
        <h3 className={styles.contatoText}> Para ter o seu trabalho apresentado em nossa página é muito simples; <br /> <br />
        1 Preencha seus dados nos campos abaixo;<br />
        2 Aguarde nosso contato por email para envio de materiais; <br /> <br />
        Pronto, em pouco tempo suas obras vão estar em nosso site! 
         </h3>
          <input 
            className={styles.formInput} 
            placeholder="Digite seu nome" 
            onChange={handleInputValueNome}
          />
          <input 
            className={styles.formInput} 
            placeholder="Digite seu email"
            onChange={handleInputValueEmail}
          />
          
          <button type="submit" className={styles.formButton}>Enviar</button>
        </form>
      </div>
    </>
  )
}