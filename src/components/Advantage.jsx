import styles from './Advantage.module.css'

const Advantage = ({title, text, img }) => {
    return ( 
        <div className={ styles.advantageWrapper }>
            <div className={ styles.imgContainer }>
                <img src={img} alt={ `icon for ${title.toLowerCase()}`} />
            </div>
            <h3 className={ styles.advantageHeading }>{ title }</h3>
            <p className={ styles.advantageText }>{ text }</p>
        </div>
     );
}
 
export default Advantage;