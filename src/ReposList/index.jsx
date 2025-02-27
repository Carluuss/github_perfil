import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, seEstaCarreando] = useState(true);

    useEffect(() => {
        seEstaCarreando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    seEstaCarreando(false);
                    setRepos(resJson)
                }, 3000)
            })
    }, [nomeUsuario])

    return (
        <div className="container">
        {estaCarregando ? (
            <h1>Carregando...</h1>
        ): (
        <ul className={styles.list}>
            {/* {repos.map(repositorio => ( */}
            {repos.map(({id, name, language, html_url}) => (
                <li key={id} className={styles.listItem}>
                    <div className={styles.itemName}>
                        <b>Nome:</b> {name}
                    </div>
                    <div className={styles.itemLanguage}>
                    <b>Linguagem:</b> {language}

                    </div>
                    <a className={styles.itemLink} href={html_url} target="_blank">Visitar no github</a>
                </li>
            ))}
        </ul>

        )}
            </div>
    )
}

export default ReposList;