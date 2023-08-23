import styles from './AdvantageSection.module.css'
import advantages from '../advantages.js'
import Advantage from './Advantage';


console.log(advantages)

const AdvantageSection = () => {
    return ( 
        <div className={ styles.advantageSection }>
            <div className={ styles.container }>
                <div className={ styles.headingWrapper }>
                    <h2 className={ styles.headingTitle }>Advanced Statistics</h2>
                    <p className={ styles.headingText }>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
                <div className={ styles.advantagesContainer }>
                    {advantages.map(item => (
                        <Advantage 
                        key={ item.id } 
                        title={ item.title }
                        text={ item.text }
                        img = {item.img}
                        />
                        ))}
                    <div className={ styles.blueLine }> &nbsp; </div>
                </div>
            </div>
        </div>
     );
}
 
export default AdvantageSection;