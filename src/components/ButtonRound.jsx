import styles from './ButtonRound.module.css'

const ButtonRound = ({ children }) => {
    return ( 
        <button className={ styles.buttonRound }>{ children }</button>
     );
}
 
export default ButtonRound;