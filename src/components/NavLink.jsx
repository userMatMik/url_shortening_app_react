import styles from './NavLink.module.css'

const NavLink = ({ isButton = false, children }) => {

    return ( 
        <li className = {isButton ? `${styles.navItem} ${styles.navButton}` : `${styles.navItem}`}>{ children }</li>
     );
}
 
export default NavLink;