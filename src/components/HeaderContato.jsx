import styles from '../styles/components/header.module.css'

export function Header(props) {
  return(
    <div className={styles.headerContato}>
    
     <h1 className={styles.headerTitleContato}>{props.title}</h1>
    
     { <img className={styles.headerImage} src={props.image} />
      }
    
    </div>


  )
}