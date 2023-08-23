import styles from './CTAsection.module.css'
import ButtonRound from './ButtonRound';

const CTAsection = () => {
    return ( 
        <section className={ styles.ctaSection }>
            <div className={ styles.container }>
                <div className={ styles.ctaContent }>
                    <h2 className={ styles.cta }>Boost your links today</h2>
                    <ButtonRound > Get Started </ButtonRound>
                </div>
            </div>
        </section>
     );
}
 
export default CTAsection;