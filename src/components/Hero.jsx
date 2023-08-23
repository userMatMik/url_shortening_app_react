import styles from './Hero.module.css'
import ButtonRound from './ButtonRound';

const Hero = () => {
    return ( 
        <section className={ styles.heroSection }>
            <div className={ styles.container }>
                <div className={ styles.hero }>
                    <div className={ styles.imgContainer }>
                        <img className = { styles.heroImg } src="./images/illustration-working.svg" alt="illustration of working person" />
                    </div>
                    <div className={ styles.heroContent }>
                        <h1 className={ styles.heroTitle }>
                            More then just shorter links
                        </h1>
                        <p className={ styles.heroText }>
                        Build your brand's recognition and get detailed insights on how your links are performing.
                        </p>
                        <ButtonRound>Get Started</ButtonRound>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Hero;