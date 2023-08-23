import { useState, useEffect } from 'react';
import styles from './LinkShortener.module.css'
import LinksWrapper from './LinksWrapper';

const LinkShortener = () => {
    const [linkInput, setLinkInput] = useState("");
    const [allLinksArray, setAllLinksArray] = useState(JSON.parse(localStorage.getItem('allLinks')) || []);
    const [error, setError] = useState({ isVisible: false, errorMsg: ""})

    useEffect(() => {
        localStorage.setItem('allLinks', JSON.stringify(allLinksArray))
    },[allLinksArray])

    function urlValidation(url) {
        // const regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm
        const regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm
        // const regex = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi

        return regex.test(url)
    }

    function handleChange (event) {
        setLinkInput(prevLink => event.target.value);
    }

    function deleteLink(event, linkCode) {
        setAllLinksArray(prevArray => prevArray.filter(item => item.code !== linkCode));
    }

    function deleteAllLinks() {
        setAllLinksArray([]);
    }

    async function getShortenedUrl(event) {
        event.preventDefault();
        const url = linkInput;
        const isURLValid = urlValidation(url);
       
        if (isURLValid) {
            const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
            const data = await response.json();
            const newLink = {
                code: data.result.code,
                originalLink: data.result.original_link,
                shortLink: data.result.full_short_link2,
            }

        setAllLinksArray(prevState => [newLink, ...prevState]);
        setError(prevState => ({
            isVisible: false,
            errorMsg: "",
        }))
        setLinkInput("")

        } else {
            setError(prevState => ({
                isVisible: true,
                errorMsg: "Please provide a valid URL",
            }))
        }
    }

    return ( 
        <section className={ styles.linkShortener }>
            <div className={ styles.container }>
                <div className={ styles.formWrapper }>
                    <form 
                        className={ styles.form }
                        onSubmit={ getShortenedUrl }
                    >
                        <label className={ styles.visuallyHidden } htmlFor="linkShrtnr">Link shortener input</label>
                        <input
                            id="linkShrtnr"
                            type="url"
                            placeholder='Shorten a link here...'
                            className={ error.isVisible ? `${styles.input} ${styles.inputError}` : styles.input }
                            onChange={ handleChange }
                            value= { linkInput } 
                        />
                        {error.isVisible && <span className={ styles.error }>{ error.errorMsg }</span>}
                        <button className={ styles.shrtBtn }>Shorten It!</button>
                    </form>
                </div>
                { allLinksArray.length > 0 && <LinksWrapper links={ allLinksArray } deleteLink={ deleteLink } deleteAllLinks={ deleteAllLinks } /> }
            </div>
        </section>
     );
}
 
export default LinkShortener;