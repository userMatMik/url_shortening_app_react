import styles from './Link.module.css'
import { useState } from 'react';



const Link = ({code, originalLink, shortLink, deleteLink}) => {
    const [isCopyBtnClicked, setIsCopyBtnClicked] = useState(false);

    function handleCopyToClipboard() {
        navigator.clipboard.writeText(shortLink)
        setIsCopyBtnClicked(true);

        setTimeout(() =>{
            setIsCopyBtnClicked(false)
        },2000)
    }   

    return ( 
        <div id = {code} className={ styles.linkWrapper }>
            <span className={styles.link}>{originalLink}</span>
            <a href={shortLink} target="_blank" rel="noreferrer noopener"><span className={`${styles.link} ${styles.linkShort}`}> { shortLink }</span></a>
            <button 
                className={ isCopyBtnClicked ? `${styles.coppyBtn} ${styles.clicked}` : styles.coppyBtn} 
                onClick={ handleCopyToClipboard }
            >
                { isCopyBtnClicked ? "Copied" : "Copy" }
            </button>
            <button 
                className={styles.deleteBtn} 
                onClick={(event) => deleteLink(event, code)}
            >
                Delete
            </button>
        </div>
     );
}
 
export default Link;
