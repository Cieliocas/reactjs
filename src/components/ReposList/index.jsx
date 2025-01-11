import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/cieliocas/repos')
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setLoading(false);
                setRepos(resJson);
            }, 3000); 
        })
    }, []);

    return (
        <div className="container">
            {loading && <h1>Carregando...</h1>}
            <ul className={styles.list}>
                {repos.map(({ id, name, language, html_url }) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}>
                            <b>Nome: </b> 
                            {name}
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem: </b>
                            {language}
                        </div>
                        <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a> <br />
                    </li>
                ))}
                <li>Repositório</li>
            </ul>
        </div>
    );
}

export default ReposList;

