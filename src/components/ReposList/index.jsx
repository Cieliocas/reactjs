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
                {repos.map(repositorio => (
                    <li key={repositorio.id}>
                        <b>Nome: </b> {repositorio.name} <br />
                        <b>Linguagem: </b> {repositorio.language} <br />
                        <a target="_blank" href={repositorio.html_url}>Visitar no Github</a> <br />
                    </li>
                ))}
                <li>Repositório</li>
            </ul>
        </>
    );
}

export default ReposList;

