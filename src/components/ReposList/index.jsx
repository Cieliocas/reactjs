import { useEffect, useState } from "react";

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
        <>
            {loading && <h1>Carregando...</h1>}
            <ul>
                {repos.map(({ id, name, language, html_url }) => (
                    <li key={id}>
                        <b>Nome: </b> {name} <br />
                        <b>Linguagem: </b> {language} <br />
                        <a target="_blank" href={html_url}>Visitar no Github</a> <br />
                    </li>
                ))}
                <li>Repositório</li>
            </ul>
        </>
    );
}

export default ReposList;

