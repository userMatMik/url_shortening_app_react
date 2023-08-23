import styles from './FooterLink.module.css'

const FooterLink = ({ isHeading = false, children}) => {
    return ( 
        <li className = {isHeading ? `${styles.footerHeading}` : `${styles.footerLink}`}>{ children }</li>
    );
}
 
export default FooterLink;