import styles from './LinksWrapper.module.css'
import Link from './Link';

const LinksWrapper = ({ links, deleteLink, deleteAllLinks }) => {

    const linkElements = links.map(link => (
        <Link 
            key = { link.code } 
            originalLink = { link.originalLink } 
            shortLink = { link.shortLink }
            code = { link.code }
            deleteLink = {deleteLink}
        />))
    
    return ( 
        <div className={styles.linksWrapper}>
            <div className={ styles.links }>
                { linkElements }
            </div>
            <button className={styles.deleteAllBtn } onClick={ deleteAllLinks }>Delete all links</button>
        </div>
     );
}
 
export default LinksWrapper;