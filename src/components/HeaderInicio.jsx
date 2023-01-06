import styles from '../styles/components/header.module.css'

export function Header (props) {
  return(
    <div className={styles.headerInicio}>
    
     <h1 className={styles.headerTitleInicio}>{props.title}</h1>
    
     { <img className={styles.headerImageInicio} src={props.image} />
      }
    
    </div>


  )
}